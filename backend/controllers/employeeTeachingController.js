const asyncHandler = require("express-async-handler");
const { connectDb } = require("../config/db");
const con = connectDb();

//@method GET
//@desc Get Employee
//@PATH /ams/employees/:id
const getEmployeesById = asyncHandler(async(req, res) => {
    var getEmployeesById = "SELECT * FROM employees where employeeid=?";
    const employee = await new Promise((resolve) => {
        con.query(getEmployeesById, [req.params.id], (err, res) => {
            if (err) res.send({ success: false, messege: "Something Went Wrong" });
            resolve(res);
        });
    });

    var queryToGetSubjectsTakeByEmployee =
        "SELECT subjects.subjectname FROM subjects INNER JOIN divisions ON divisions.subjectid = subjects.subjectid INNER JOIN employees ON divisions.employeeid = employees.employeeid WHERE employees.employeeid= ?";
    var getAllSubjectsOfEmployee = await new Promise((resolve) => {
        con.query(
            queryToGetSubjectsTakeByEmployee, [req.params.id],
            (err, result) => {
                if (err) res.send({ success: false, messege: "Something Went Wrong" });

                resolve(result);
            }
        );
    });
    var getSubjects = [];
    for (let i in getAllSubjectsOfEmployee) {
        getSubjects.push(getAllSubjectsOfEmployee[i]["subjectname"]);
    }
    res.send({ success: true, employee: employee[0], subjects: getSubjects });
});

//@method GET
//@desc Get Employee
//@PATH /ams/employees/
const getAllEmployees = asyncHandler(async(req, res) => {
    var getAllEmployees =
        "SELECT employeeid, firstname,middlename,lastname,gender,email FROM employees";
    con.query(getAllEmployees, (err, result) => {
        if (err) res.send({ success: false, messege: "Something Went Wrong" });

        res.send({ success: true, employees: result });
    });
});

//@desc Take attendance of students
//@method POST
//@PATH /ams/employees/attendance
const takeAttendance = asyncHandler(async(req, res) => {
    const { subject, date, attendance, employeeid } = req.body;
    if (!subject || !date || !attendance || !employeeid) {
        return res
            .status(400)
            .json({ success: false, messege: "Please Fill Data" });
    }
    // Get All Students Attendance till now
    const getStudentsTotalAttendance = await new Promise((resolve) => {
        con.query(
            `Select enrollmentno,Totalstudentattendtillnow from ${subject}`,
            (err, rows) => {
                if (err) {
                    return res
                        .status(400)
                        .json({ success: false, messege: "Something Went Wrong" });
                }
                var jsonData = new Array(rows);
                var studentsTotalAttendance = {};
                var getStudentAttendance = [];
                for (var i = 0; i < 1; i++) {
                    for (var j = 0; j < jsonData.length + 1; j++) {
                        studentsTotalAttendance[jsonData[i][j]["enrollmentno"]] =
                            jsonData[i][j]["Totalstudentattendtillnow"];
                        getStudentAttendance.push(studentsTotalAttendance);
                    }
                }
                resolve(getStudentAttendance[0]);
            }
        );
    });

    var getColumnIFExsist = `SHOW COLUMNS FROM ${subject}`;
    con.query(getColumnIFExsist, (err, rows) => {
        if (err) {
            return res.status(400).json({ success: false });
        }
        var i = 1;
        var k = 0;
        var arrayColumns = [];

        while (i <= rows.length) {
            arrayColumns.push(rows[k].Field);
            k++;
            i++;
        }

        var checkColumn = arrayColumns.indexOf(date);
        if (checkColumn < 1) {
            var addColumnSql = `ALTER TABLE ${subject} ADD ${date} int(10)`;
            con.query(addColumnSql);
        }
        var getColumnsCount =
            "SELECT COUNT(*) FROM information_schema.columns WHERE table_name = ?";
        con.query(getColumnsCount, [subject], (err, result) => {
            if (err) {
                return res.status(400).json({ success: false });
            }
            var jsonData = JSON.parse(JSON.stringify(result[0]));
            var totalLectures = jsonData["COUNT(*)"] - 5;
            var result = {};
            for (let key in attendance) {
                result[key] = attendance[key] + getStudentsTotalAttendance[key];
            }
            for (let key in result) {
                var insertAttendanceSql = `UPDATE ${subject} SET ${date}=?,TotalLecturestillnow=?,Totalstudentattendtillnow=? WHERE enrollmentno=? && employeeid=?`;
                con.query(
                    insertAttendanceSql, [attendance[key], totalLectures, result[key], key, employeeid],
                    (err) => {
                        if (err) {
                            return res.status(400).json({ success: false });
                        }
                    }
                );
            }
            return res
                .status(200)
                .send({ success: true, messege: "Attendance Submitted" });
        });
    });
});

//@desc Update  of students
//@method PUT
//@PATH /ams/employees/attendance
const updateStudentAttendace = asyncHandler(async(req, res) => {
    const { subject, employeeId, date, attendance } = req.body;
    if (!attendance) {
        res.send({ success: false, messege: "Please Fill Data" });
    } else {
        var promises = []
        for (var key in attendance) {
            var getStudentAttendancetillnow = `Select enrollmentno,Totalstudentattendtillnow from ${subject} WHERE enrollmentno=? && employeeid=?`;
            var promise = await new Promise((resolve) => {
                con.query(
                    getStudentAttendancetillnow, [attendance[key]["enrollmentno"], employeeId],
                    (err, results) => {
                        var data = JSON.parse(JSON.stringify(results))
                        resolve(data[0])
                    }
                );
            })
            promises.push(promise)
        }
        Promise.all(promises).then((results) => {
            let finalSubtractedAttendance = []
            console.log(attendance)
            console.log(results)
            for (let i = 0; i < results.length; i++) {
                const item1 = results[i];
                const item2 = attendance.find((item) => item.enrollmentno === item1.enrollmentno);
                if (item2) {
                    if (item2.attend === 1) {
                        finalSubtractedAttendance.push({
                            enrollmentno: item1.enrollmentno,
                            difference: item1.Totalstudentattendtillnow + 1
                        });
                    } else {
                        finalSubtractedAttendance.push({
                            enrollmentno: item1.enrollmentno,
                            difference: item1.Totalstudentattendtillnow - 1
                        });
                    }
                }
            }
            console.log(finalSubtractedAttendance)
            for (var key in attendance) {
                var updateAttendanceSql = `UPDATE ${subject} SET ${date}=?,Totalstudentattendtillnow=? WHERE enrollmentno=? && employeeid=?`
                con.query(updateAttendanceSql, [attendance[key]["attend"], finalSubtractedAttendance[key]['difference'], attendance[key]["enrollmentno"], employeeId], (err) => {
                    if (err) {
                        return res.send({ success: false, messege: "Something Went Wrong" })
                    }
                })
            }
            return res.send({ success: true, messege: "Attendance Updated" });
        }).catch((err) => {
            res.send({ success: false, messege: 'Something Went Wrong' })
        })

    }
});

//@desc Take attendance of students
//@method POST
//@PATH /ams/employees/query
const responseQueryToStudent = asyncHandler(async(req, res) => {
    const {
        description,
        employeeId,
        enrollmentNumber,
        programId,
        subjectId,
        semesterId,
    } = req.body;

    if (!description ||
        !employeeId ||
        !enrollmentNumber ||
        !programId ||
        !subjectId ||
        !semesterId
    ) {
        res.send({ success: false, messege: "Please Fill Data" });
    } else {
        var sendResponseToStudent = `INSERT INTO queries(description,employeeid,enrollmentno,programid,subjectid,semesterid)values(?,?,?,?,?,?)`;
        con.query(
            sendResponseToStudent, [
                description,
                employeeId,
                enrollmentNumber,
                programId,
                subjectId,
                semesterId,
            ],
            (err) => {
                if (err) res.send({ success: false, messege: "Something Went Wrong" });
            }
        );
        res.send({ success: true, messege: "Response Submitted" });
    }
});

//@desc Take attendance of students
//@method GET
//@PATH /ams/employees/query/:id
const getStudentsQuery = asyncHandler(async(req, res) => {
    var studentsQueryDetails =
        "SELECT queries.description,students.firstname,students.middlename FROM queries INNER JOIN students ON queries.enrollmentno=students.enrollmentno WHERE employeeid=?;";
    var queries = await new Promise((resolve) => {
        con.query(studentsQueryDetails, [req.params.id], (err, result) => {
            if (err) res.send({ success: false, messege: "Something Went Wrong" });
            resolve(result);
        });
    });
    res.send({ success: true, queries });
});

//@desc Take attendance of students
//@method GET
//@PATH /ams/employees/getStudentAttendance
const getStudentsAttendance = asyncHandler(async(req, res) => {
    const { subject, enrollmentNumber } = req.body;
    var getStudentAttendance = `SELECT TotalLecturestillnow,Totalstudentattendtillnow FROM ${subject} WHERE employeeid=? && enrollmentno=? `;
    var getAttendance = await new Promise((resolve) => {
        con.query(
            getStudentAttendance, [req.params.id, enrollmentNumber],
            (err, result) => {
                if (err) res.send({ success: false, messege: "Something Went Wrong" });
                var jsonData = JSON.parse(JSON.stringify(result));
                resolve(jsonData);
            }
        );
    });
    var percentage =
        (getAttendance[0]["Totalstudentattendtillnow"] /
            getAttendance[0]["TotalLecturestillnow"]) *
        100;
    res.send({
        success: true,
        lectureDetails: getAttendance,
        attendancePercentage: percentage,
    });
});

module.exports = {
    takeAttendance,
    getEmployeesById,
    getAllEmployees,
    updateStudentAttendace,
    responseQueryToStudent,
    getStudentsQuery,
    getStudentsAttendance,
};