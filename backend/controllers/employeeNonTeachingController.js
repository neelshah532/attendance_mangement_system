const asyncHandler = require("express-async-handler");
const { connectDb } = require("../config/db");
const con = connectDb();

//@method POST
//@desc addStudents
//@PATH /ams/admin/manageStudent/add
const addStudent = asyncHandler(async(req, res) => {
    const {
        enrollmentno,
        firstname,
        middlename,
        lastname,
        dob,
        gender,
        email,
        phone,
        password,
        flatno,
        area,
        city,
        state,
        pincode,
        division,
        semester,
        programid,
    } = req.body;
    if (!enrollmentno ||
        !firstname ||
        !middlename ||
        !lastname ||
        !dob ||
        !gender ||
        !email ||
        !phone ||
        !password ||
        !flatno ||
        !area ||
        !city ||
        !state ||
        !pincode ||
        !division ||
        !semester ||
        !programid
    )
        return res.send({ success: false, messege: "Please Fill Proper Data" });

    var semesterSubjectsQuery = `SELECT subjects.subjectname FROM subjects INNER JOIN semesters ON subjects.semesterid=semesters.semesterid WHERE semesters.semestername=? && subjects.type=?`;
    var getStudentSubjects = await new Promise((resolve) => {
        con.query(semesterSubjectsQuery, [semester, "Regular"], (err, results) => {
            if (err)
                return res.send({ success: false, messege: "Something Went Wrong" });
            const subjectNames = results.map((item) => item.subjectname);
            resolve(subjectNames);
        });
    });

    var addStudentQuery = `INSERT INTO students(enrollmentno, firstname, middlename, lastname, dob, gender, email, phone, password, flatno, area, city, state, pincode, division, semester, programid)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    con.query(
        addStudentQuery, [
            enrollmentno,
            firstname,
            middlename,
            lastname,
            dob,
            gender,
            email,
            phone,
            password,
            flatno,
            area,
            city,
            state,
            pincode,
            division,
            semester,
            programid,
        ],
        (err) => {
            if (err)
                return res.send({ success: false, messege: "Something Went Wrong" });
        }
    );

    for (subject of getStudentSubjects) {
        var addStudentIntoSubjectTableQuery = `INSERT INTO ${subject}(enrollmentno,TotalLecturestillnow,Totalstudentattendtillnow)VALUES(?,?,?)`;
        con.query(addStudentIntoSubjectTableQuery, [enrollmentno, 0, 0]);
    }

    res.send({ success: true, messege: "Student Inserted" });
});

//@method PUT
//@desc updateStudents
//@PATH /ams/admin/manageStudent/update/:id
const updateStudent = asyncHandler(async(req, res) => {
    const {
        enrollmentno,
        firstname,
        middlename,
        lastname,
        dob,
        gender,
        email,
        phone,
        password,
        flatno,
        area,
        city,
        state,
        pincode,
        division,
        semester,
        programid,
    } = req.body;
    if (!enrollmentno ||
        !firstname ||
        !middlename ||
        !lastname ||
        !dob ||
        !gender ||
        !email ||
        !phone ||
        !password ||
        !flatno ||
        !area ||
        !city ||
        !state ||
        !pincode ||
        !division ||
        !semester ||
        !programid
    )
        return res.send({ success: false, messege: "Please Fill Proper Data" });

    var updateStudentQuery =
        "UPDATE students SET firstname=?, middlename=?, lastname=?, dob=?, gender=?, email=?, phone=?, password=?, flatno=?, area=?, city=?, state=?, pincode=?, division=?, semester=?, programid=? WHERE enrollmentno=?";

    con.query(
        updateStudentQuery, [
            firstname,
            middlename,
            lastname,
            dob,
            gender,
            email,
            phone,
            password,
            flatno,
            area,
            city,
            state,
            pincode,
            division,
            semester,
            programid,
            enrollmentno,
        ],
        (err) => {
            if (err)
                return res.send({ success: false, messege: "Something Went Wrong" });

            res.send({ success: true, messege: "Student Data Updated" });
        }
    );
});

//@method POST
//@desc addEmployee
//@PATH /ams/admin/manageEmployee/add
const addEmployee = asyncHandler(async(req, res) => {
    const {
        firstname,
        middlename,
        lastname,
        type,
        gender,
        email,
        phone,
        password,
        flatno,
        area,
        city,
        state,
        pincode,
    } = req.body;
    if (!firstname ||
        !middlename ||
        !lastname ||
        !type ||
        !gender ||
        !email ||
        !phone ||
        !password ||
        !flatno ||
        !area ||
        !city ||
        !state ||
        !pincode
    )
        return res.send({ success: false, messege: "Please Fill Proper Data" });

    var addStudentQuery = `INSERT INTO employees(firstname, middlename, lastname,type, gender, email, phone, password, flatno, area, city, state, pincode)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    con.query(addStudentQuery, [
        firstname,
        middlename,
        lastname,
        type,
        gender,
        email,
        phone,
        password,
        flatno,
        area,
        city,
        state,
        pincode,
    ]);

    res.send({ success: true, messege: "Employee Record Inserted" });
});

//@method PUT
//@desc updateEmployee
//@PATH /ams/admin/manageEmployee/update/:id
const updateEmployee = asyncHandler(async(req, res) => {
    const {
        employeeid,
        firstname,
        middlename,
        lastname,
        type,
        gender,
        email,
        phone,
        password,
        flatno,
        area,
        city,
        state,
        pincode,
    } = req.body;
    if (!employeeid ||
        !firstname ||
        !middlename ||
        !lastname ||
        !type ||
        !gender ||
        !email ||
        !phone ||
        !password ||
        !flatno ||
        !area ||
        !city ||
        !state ||
        !pincode
    )
        return res.send({ success: false, messege: "Please Fill Proper Data" });

    var updateStudentQuery =
        "UPDATE employees SET firstname=?, middlename=?, lastname=?, type=?, gender=?, email=?, phone=?, password=?, flatno=?, area=?, city=?, state=?, pincode=? WHERE employeeid=?";

    con.query(
        updateStudentQuery, [
            firstname,
            middlename,
            lastname,
            type,
            gender,
            email,
            phone,
            password,
            flatno,
            area,
            city,
            state,
            pincode,
            employeeid,
        ],
        (err) => {
            if (err)
                return res.send({ success: false, messege: "Something Went Wrong" });

            res.send({ success: true, messege: "Employee Record Updated" });
        }
    );
});

//@method DELETE
//@desc deleteData Both Student || Employee
//@PATH /ams/admin/manage/delete/:id
const deleteData = asyncHandler(async(req, res) => {
    if (!req.params.id)
        return res.send({ success: false, messege: "Student Not Selected" });

    var id;
    if (req.params.type == "students") {
        id = "enrollmentno";
    } else {
        id = "employeeid";
    }
    var deleteStudentQuery = `DELETE FROM ${req.params.type} WHERE ${id}=?`;

    con.query(deleteStudentQuery, [req.params.id], (err) => {
        if (err) return res.send({ success: false, messege: err });
        res.send({ success: true, messege: "Record Deleted" });
    });
});

//@method POST
//@desc ADD Subjects
//@PATH /ams/admin/subjects/add
const addSubjects = asyncHandler(async(req, res) => {
    console.log(req.body)
    const { type, subjectName } = req.body;
    if (!type || !subjectName)
        return res.send({ success: true, messege: "Please Fill Proper Data" });

    var addSubjectQuery =
        "INSERT INTO subjects(type,subjectname)VALUES(?,?)";
    con.query(addSubjectQuery, [type, subjectName], (err) => {
        if (err)
            return res.send({ success: true, messege: "Something Went Wrong" });
    });

    var addTableQuery =
        `CREATE TABLE ${subjectName} (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,employeeid int(10) DEFAULT NULL,enrollmentno bigint(10) DEFAULT NULL,TotalLecturestillnow int(11) NOT NULL,Totalstudentattendtillnow int(11) NOT NULL,FOREIGN KEY (employeeid) REFERENCES employees(employeeid),FOREIGN KEY (enrollmentno) REFERENCES students(enrollmentno))`
    con.query(addTableQuery, (err) => {
        if (err)
            return res.send({ success: true, messege: "Something Went Wrong" });
        res.send({ success: true, messege: "Subject Added" });
    });
});

//@method PUT
//@desc UPDATE Subjects
//@PATH /ams/admin/subjects/update
const updateSubjects = asyncHandler(async(req, res) => {
    const { type, subjectName, semesterId } = req.body;
    if (!type || !subjectName || !semesterId)
        return res.send({ success: true, messege: "Please Fill Proper Data" });

    var updateSubjectQuery =
        "UPDATE subjects SET type=?,subjectName=?,semesterid=?";
    con.query(updateSubjectQuery, [type, subjectName, semesterId], (err) => {
        if (err)
            return res.send({ success: true, messege: "Something Went Wrong" });

        res.send({ success: true, messege: "Subject Updated" });
    });
});

//@method DELETE
//@desc DELETE Subjects
//@PATH /ams/admin/subjects/delete/:subid
const deleteSubject = asyncHandler(async(req, res) => {
    if (!req.params.id)
        return res.send({ success: true, messege: "Subject Not Selected" });
    var deleteSubjectQuery = "DELETE FROM subjects WHERE subjectid=?";
    con.query(deleteSubjectQuery, [req.params.id], (err) => {
        if (err)
            return res.send({ success: true, messege: "Something Went Wrong" });
    });
    var deleteTableQuery =
        `DROP TABLE ${req.params.subject}`
    con.query(deleteTableQuery, (err) => {
        if (err)
            return res.send({ success: true, messege: "Something Went Wrong" });
        res.send({ success: true, messege: "Subject Deleted" });
    });
});

//@method GET
//@desc get All Subjects
//@PATH /ams/admin/subjects/getSubjects
const getSubjects = asyncHandler(async(req, res) => {
    var getSubjectsQuery = "SELECT * FROM subjects";
    con.query(getSubjectsQuery, (err, subjects) => {
        if (err)
            return res.send({ success: true, messege: "Something Went Wrong" });

        res.send({ success: true, subjects: subjects });
    });
});

//@method POST
//@desc ALLOCATE SUBJECTS TO EMPLOYEES
//@PATH /ams/admin/allocateSubjects
const allocateSubjectsToEmployee = asyncHandler(async(req, res) => {
    const { subjects, division, employeeid } = req.body;

    const subjectID = [];
    for (var subject of subjects) {
        var id = await new Promise((resolve) => {
            var getSelectedSubjectQuery =
                "SELECT subjectid FROM subjects WHERE subjectname=?";
            con.query(getSelectedSubjectQuery, [subject], (err, id) => {
                resolve(id[0]);
            });
        });
        subjectID.push(id);
    }

    for (let i = 0; i < subjects.length && i < division.length; i++) {
        var div = division[i];
        var sub = subjects[i];
        var updateQuery = `UPDATE ${sub} INNER JOIN students ON ${sub}.enrollmentno = students.enrollmentno SET ${sub}.employeeid = ? WHERE students.division=?`;
        con.query(updateQuery, [employeeid, div], (err) => {
            if (err) throw err;
        });
    }

    // for (let i = 0; i < subjectID.length && i < division.length; i++) {
    //     const div = division[i];
    //     const subId = subjectID[i];
    //     var addDivisionQuery = "INSERT INTO divisions(divisionname,employeeid,subjectid)VALUES(?,?,?)"
    //     con.query(addDivisionQuery, [div, employeeid, subId.subjectid])
    // }

    res.send({ success: true, messege: "Subject Allocated to Employee" });
});

//@method POST
//@desc ADD PROGRAM
//@PATH /ams/admin/manageProgram/add
const addProgram = asyncHandler(async(req, res) => {
    const { programname, numberOfSemester } = req.body;
    if (!programname || !numberOfSemester)
        return res.send({ success: false, messege: "Please Send Proper Data" });

    var addProgramQuery = "INSERT INTO programs(programename)VALUES(?)";
    var lastInsertedId = await new Promise((resolve) => {
        con.query(addProgramQuery, [programname], (err, result) => {
            if (err)
                return res.send({ success: false, messege: "Something Went Wrong" });

            resolve(result.insertId);
        });
    });

    var i = 1;
    while (i <= numberOfSemester) {
        var addSemesterQuery =
            "INSERT INTO semesters(semestername,programid)VALUES(?,?)";
        con.query(addSemesterQuery, [`Semester ${i}`, lastInsertedId]);
        i++;
    }
    res.send({ success: true, messege: "Program Added" });
});

//@desc Take attendance of students
//@method GET
//@PATH /ams/employees/query/:id
const getAllQuery = asyncHandler(async(req, res) => {
    var studentsQueryDetails =
        "SELECT students.enrollmentno,subjects.subjectname,queries.description,employees.firstname,employees.middlename FROM queries INNER JOIN students ON queries.enrollmentno=students.enrollmentno INNER JOIN subjects ON queries.subjectid=subjects.subjectid INNER JOIN employees ON queries.employeeid=employees.employeeid WHERE employees.employeeid=?";
    var queries = await new Promise((resolve) => {
        con.query(studentsQueryDetails, [req.params.employeeid], (err, result) => {
            if (err)
                return res.send({ success: false, messege: "Something Went Wrong" });
            resolve(result);
        });
    });
    res.send({ success: true, queries });
});

//@method POST
//@desc ADD PROGRAM
//@PATH /ams/admin/manageProgram/delete/:id
const deleteProgram = asyncHandler(async(req, res) => {
    if (!req.params)
        return res.send({ success: false, messege: "Send Proper Data" });

    var deleteProgram = "DELETE FROM programs WHERE programid=?";
    con.query(deleteProgram, [req.params.id], (err) => {
        if (err)
            return res.send({ success: false, messege: "Something Went Wrong" });

        res.send({ success: true, messege: "Program Deleted" });
    });
});

module.exports = {
    addStudent,
    updateStudent,
    deleteData,
    addEmployee,
    updateEmployee,
    addSubjects,
    updateSubjects,
    deleteSubject,
    getSubjects,
    allocateSubjectsToEmployee,
    addProgram,
    deleteProgram,
    getAllQuery,
};