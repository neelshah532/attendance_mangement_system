const asyncHandler = require('express-async-handler')
const { connectDb } = require('../config/db')
const con = connectDb()

//@method GET
//@desc Get Students
//@PATH /ams/students
const studentData = asyncHandler(async(req, res) => {
    const query = `SELECT enrollmentno,firstname,middlename,lastname FROM students`;
    con.query(query, (err, result) => {
        if (err) {
            res.send({ success: false, messege: "Something Went Wrong" })
        } else {
            res.status(200).json({ success: true, students: result })
        }
    })
});

//@method POST 
//@desc LOGIN STUDENTS | EMPLOYEES | SUPER USER
//@PATH /ams/login
const login = asyncHandler(async(req, res) => {
    const { data, password, type } = req.body;

    if (!data || !password || !type) {
        res.send({ success: false, messege: "Please Fill Data Properly" })
    } else {
        let columnName;
        let id
        let dataNeed
        if (type == "students") {
            columnName = "enrollmentno"
            id = "enrollmentno"
            dataNeed = "email"
        } else {
            columnName = "email"
            id = "employeeid"
            dataNeed = "type"
        }
        con.query(`SELECT ${id},${dataNeed},firstname,middlename,lastname FROM ${type} WHERE ${columnName} = ? && password=?`, [data, password], (error, results) => {
            if (error)
                return res.send({ success: false, messege: "Something Went Wrong" })
            if (results[0]) {
                var id, usertype
                if (type == "students") {
                    id = results[0]['enrollmentno']
                    usertype = "student"
                } else {
                    id = results[0]['employeeid']
                    usertype = results[0]['type']
                }
                res.send({ success: true, credentials: { id, usertype } })
            } else {
                res.send({ success: false, messege: "Incorrect Username or Password" });
            }
        });
    }
});

//@method GET
//@desc Get Students By ID
//@PATH /ams/students/:id
const getStudentsById = asyncHandler(async(req, res) => {
    const studentsId = req.params.id;
    if (!studentsId) {
        res.send({ success: false, messege: "Something Went Wrong" })
    } else {
        const getStudentsById = "SELECT * FROM students where enrollmentno=?";
        try {
            con.query(getStudentsById, [studentsId], (err, result) => {
                res.send({ success: true, students: result[0] })
            });
        } catch (error) {
            res.send({ success: false, messege: "Something Went Wrong" })
        }
    }
});

//@method GET 
//@desc GET students Attendance
//@PATH /ams/students/getAttendance
const attendanceOfStudent = asyncHandler(async(req, res) => {
    const { subject, enrollmentNumber } = req.params;
    var getStudentAttendance = `SELECT TotalLecturestillnow,Totalstudentattendtillnow FROM ${subject} WHERE enrollmentno=? `;
    var attendance = await new Promise((resolve) => {
        con.query(
            getStudentAttendance, [enrollmentNumber],
            (err, result) => {
                if (err) res.send({ success: false, messege: "Something Went Wrong" });
                var jsonData = JSON.parse(JSON.stringify(result));
                resolve(jsonData);
            }
        );
    });
    var percentage =
        (attendance[0]["Totalstudentattendtillnow"] /
            attendance[0]["TotalLecturestillnow"]) *
        100;
    res.send({
        success: true,
        lectureDetails: attendance[0],
        attendancePercentage: percentage,
    });
});

//@method GET 
//@desc GET students Monthly Attendance
//@PATH /ams//getStudentAttendanceByMonth/:id
const monthlyAttendanceOfStudent = asyncHandler(async(req, res) => {
    if (!req.params)
        return res.send({ success: false, messege: "Please Fill Data Properly" })

    const { subject, month } = req.params
    var getColumnNamesQuery = `SHOW COLUMNS FROM ${subject}`;
    const getColumnNames = await new Promise((resolve) => {
        con.query(getColumnNamesQuery, (err, names) => {
            var i = 1;
            var k = 0;
            var arrayColumns = [];

            while (i <= names.length) {
                arrayColumns.push(names[k].Field);
                k++;
                i++;
            }

            const columnsNames = arrayColumns.slice(5, )
            resolve(columnsNames)
        })
    })
    let countMonth = 0
    for (var attendance of getColumnNames) {
        let d = JSON.stringify(attendance)
        if (d.includes(month)) {
            countMonth++
        }
    }
    var getStudentAttendance = `SELECT * FROM ${subject} WHERE enrollmentno=? `;
    var getAttendance = await new Promise((resolve) => {
        con.query(
            getStudentAttendance, [req.params.id],
            (err, result) => {
                if (err) res.send({ success: false, messege: "Something Went Wrong" });
                var jsonData = JSON.parse(JSON.stringify(result));
                resolve(jsonData);
            }
        );
    });

    let Totalstudentattendtillnow = getAttendance[0]["Totalstudentattendtillnow"]

    for (let i = 0; i < getAttendance.length; i++) {
        let keysToRemove = [];
        for (let key in getAttendance[i]) {
            if (!key.includes(month)) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach(key => delete getAttendance[i][key]);
    }

    var percentage =
        (Totalstudentattendtillnow / countMonth) *
        100;

    res.send({
        success: true,
        TotalNumberOfLectures: countMonth,
        studentAttendLecture: Totalstudentattendtillnow,
        attendancePercentage: percentage,
    });
})

//@method GET 
//@desc GET students By Division
//@PATH /ams/getDailyAttendance/:id
const getDailyAttendance = asyncHandler(async(req, res) => {
    if (!req.params)
        return res.send({ success: false, messege: "Send Proper Data" })

    var studentsSemesterQueryDetails =
        "SELECT semester FROM students WHERE enrollmentno=?";
    var semester = await new Promise((resolve) => {
        con.query(studentsSemesterQueryDetails, [req.params.id], (err, result) => {
            if (err) return res.send({ success: false, messege: "Something Went Wrong" });
            resolve(result);
        });
    });

    var semesterSubjectsQuery = `SELECT subjects.subjectname FROM subjects INNER JOIN semesters ON subjects.semesterid=semesters.semesterid WHERE semesters.semestername=? && subjects.type=?`
    var getStudentSubjects = await new Promise((resolve) => {
        con.query(semesterSubjectsQuery, [semester[0]['semester'], 'Regular'], (err, results) => {
            if (err)
                return res.send({ success: false, messege: "Something Went Wrong" })
            var getSubjects = [];
            for (let i in results) {
                getSubjects.push(results[i]["subjectname"]);
            }
            resolve(getSubjects)
        })
    })

    var getAllSubjectAttendance = []
    for (var subject of getStudentSubjects) {
        var promise = await new Promise((resolve) => {
            var getDailyAttendanceQuery = `SELECT * FROM ${subject} WHERE enrollmentno=?`
            con.query(getDailyAttendanceQuery, [req.params.id], (err, data) => {
                resolve(data)
            })
        })
        getAllSubjectAttendance.push(promise)
    }

    const keysToRemove = ['id', 'employeeid', 'enrollmentno', 'TotalLecturestillnow', 'Totalstudentattendtillnow'];

    const modifiedData = getAllSubjectAttendance.map(arr => arr.map(obj => {
        keysToRemove.forEach(key => delete obj[key]);
        if (Object.keys(obj).length === 0) return null; // add this check to remove empty objects
        return obj;
    }).filter(obj => obj !== null));

    const Data = modifiedData.map(arr => arr.map(obj => {
        keysToRemove.forEach(key => delete obj[key]);
        return obj;
    })).filter(obj => Object.keys(obj).length !== 0)

    const newArray = modifiedData.map((element, index) => {
        const newObject = {};
        newObject[getStudentSubjects[index]] = element[0];
        return newObject;
    });


    res.send({ success: true, dailyAttendance: newArray })
})

//@desc Take attendance of students
//@method GET
//@PATH /ams/students/query/:id
const getQuery = asyncHandler(async(req, res) => {
    var studentsQueryDetails =
        "SELECT semesters.semestername,subjects.subjectName,queries.description,employees.firstname,employees.middlename FROM queries INNER JOIN employees ON queries.employeeid=employees.employeeid INNER JOIN subjects ON queries.subjectid=subjects.subjectid INNER JOIN semesters ON queries.semesterid=semesters.semesterid WHERE queries.enrollmentno=?;";
    var queries = await new Promise((resolve) => {
        con.query(studentsQueryDetails, [req.params.id], (err, result) => {
            if (err) return res.send({ success: false, messege: "Something Went Wrong" });
            resolve(result);
        });
    });
    res.send({ success: true, queries });
});

//@desc Get Student Subjects
//@method GET
//@PATH /ams/students/getSubjects/:id
const getStudentSubjects = asyncHandler(async(req, res) => {
    var studentsQueryDetails =
        "SELECT semester FROM students WHERE enrollmentno=?";
    var semester = await new Promise((resolve) => {
        con.query(studentsQueryDetails, [req.params.id], (err, result) => {
            if (err) return res.send({ success: false, messege: "Something Went Wrong" });
            resolve(result);
        });
    });

    var semesterSubjectsQuery = `SELECT semesters.semesterid,subjects.subjectid,subjects.subjectname FROM subjects INNER JOIN semesters ON subjects.semesterid=semesters.semesterid WHERE semesters.semestername=? && subjects.type=?`
    var getStudentSubjects = await new Promise((resolve) => {
        con.query(semesterSubjectsQuery, [semester[0]['semester'], 'Regular'], (err, results) => {
            if (err)
                return res.send({ success: false, messege: "Something Went Wrong" })
            resolve(results)
        })
    })
    res.send({ success: true, subjects: getStudentSubjects });
});

//@desc Get Student Subjects
//@method GET
//@PATH /ams/students/getEmployeesBySubjects/:subject
const getEmployeesBySubject = asyncHandler(async(req, res) => {
    if (!req.params)
        return res.send({ success: false, messege: "Please Send Proper Data" })

    var getEmployeesQuery = `SELECT employees.employeeid,employees.firstname,employees.middlename,employees.lastname FROM employees INNER JOIN divisions ON divisions.employeeid=employees.employeeid WHERE divisions.subjectid = ?`
    var getEmployees = await new Promise((resolve) => {
        con.query(getEmployeesQuery, [req.params.subjectid], (err, results) => {
            if (err)
                return res.send({ success: false, messege: "Something Went Wrong" })
            resolve(results)
        })
    })
    res.send({ success: true, employees: getEmployees });
});

module.exports = {
    studentData,
    getStudentsById,
    attendanceOfStudent,
    login,
    monthlyAttendanceOfStudent,
    getDailyAttendance,
    getQuery,
    getStudentSubjects,
    getEmployeesBySubject
}