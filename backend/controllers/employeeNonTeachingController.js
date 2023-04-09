const asyncHandler = require("express-async-handler");
const { connectDb } = require("../config/db");
const con = connectDb();

//@method POST 
//@desc addStudents
//@PATH /ams/admin/manageStudent/add
const addStudent = asyncHandler(async(req, res) => {
    const { enrollmentNo, firstName, middleName, lastName, dob, gender, email, phone, password, flatNo, area, city, state, pincode, division, semester, programid } = req.body
    if (!enrollmentNo || !firstName || !middleName || !lastName || !dob || !gender || !email || !phone || !password || !flatNo || !area || !city || !state || !pincode || !division || !semester || !programid)
        return res.send({ success: false, messege: "Please Fill Proper Data" })

    var semesterSubjectsQuery = `SELECT subjects.subjectname FROM subjects INNER JOIN semesters ON subjects.semesterid=semesters.semesterid WHERE semesters.semestername=? && subjects.type=?`
    var getStudentSubjects = await new Promise((resolve) => {
        con.query(semesterSubjectsQuery, [semester, 'Regular'], (err, results) => {
            const subjectNames = results.map(item => item.subjectname);
            resolve(subjectNames)
        })
    })

    var addStudentQuery = `INSERT INTO students(enrollmentNo, firstName, middleName, lastName, dob, gender, email, phone, password, flatNo, area, city, state, pincode, division, semester, programid)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
    con.query(addStudentQuery, [enrollmentNo, firstName, middleName, lastName, dob, gender, email, phone, password, flatNo, area, city, state, pincode, division, semester, programid], (err) => {
        if (err) return res.send({ success: false, messege: "Something Went Wrong" })
    })

    for (subject of getStudentSubjects) {
        var addStudentIntoSubjectTableQuery = `INSERT INTO ${subject}(enrollmentno,TotalLecturestillnow,Totalstudentattendtillnow)VALUES(?,?,?)`
        con.query(addStudentIntoSubjectTableQuery, [enrollmentNo, 0, 0]);
    }

    res.send({ success: true, messege: "Student Inserted" })
});


//@method PUT 
//@desc updateStudents
//@PATH /ams/admin/manageStudent/update/:id
const updateStudent = asyncHandler(async(req, res) => {
    const { firstName, middleName, lastName, dob, gender, email, phone, password, flatNo, area, city, state, pincode, division, semester, programid } = req.body
    if (!firstName || !middleName || !lastName || !dob || !gender || !email || !phone || !password || !flatNo || !area || !city || !state || !pincode || !division || !semester || !programid)
        return res.send({ success: false, messege: "Please Fill Proper Data" })

    var updateStudentQuery = "UPDATE students SET firstName=?, middleName=?, lastName=?, dob=?, gender=?, email=?, phone=?, password=?, flatNo=?, area=?, city=?, state=?, pincode=?, division=?, semester=?, programid=? WHERE enrollmentno=?"

    con.query(updateStudentQuery, [firstName, middleName, lastName, dob, gender, email, phone, password, flatNo, area, city, state, pincode, division, semester, programid, req.params.id], (err) => {
        if (err) return res.send({ success: false, messege: "Something Went Wrong" })

        res.send({ success: true, messege: "Student Data Updated" })
    })
})

//@method POST 
//@desc addEmployee
//@PATH /ams/admin/manageEmployee/add
const addEmployee = asyncHandler(async(req, res) => {
    const { firstName, middleName, lastName, type, gender, email, phone, password, flatNo, area, city, state, pincode } = req.body
    if (!firstName || !middleName || !lastName || !type || !gender || !email || !phone || !password || !flatNo || !area || !city || !state || !pincode)
        return res.send({ success: false, messege: "Please Fill Proper Data" })

    var addStudentQuery = `INSERT INTO employees(firstName, middleName, lastName,type, gender, email, phone, password, flatNo, area, city, state, pincode)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`
    con.query(addStudentQuery, [enrollmentNo, firstName, middleName, lastName, type, gender, email, phone, password, flatNo, area, city, state, pincode], (err) => {
        if (err) return res.send({ success: false, messege: "Something Went Wrong" })

        res.send({ success: true, messege: "Employee Record Inserted" })
    })
})

//@method PUT 
//@desc updateEmployee
//@PATH /ams/admin/manageEmployee/update/:id
const updateEmployee = asyncHandler(async(req, res) => {
    const { firstName, middleName, lastName, type, gender, email, phone, password, flatNo, area, city, state, pincode } = req.body
    if (!firstName || !middleName || !lastName || !type || !gender || !email || !phone || !password || !flatNo || !area || !city || !state || !pincode)
        return res.send({ success: false, messege: "Please Fill Proper Data" })

    var updateStudentQuery = "UPDATE employees SET firstName=?, middleName=?, lastName=?, type=?, gender=?, email=?, phone=?, password=?, flatNo=?, area=?, city=?, state=?, pincode=? WHERE employeeid=?"

    con.query(updateStudentQuery, [firstName, middleName, lastName, type, gender, email, phone, password, flatNo, area, city, state, pincode, req.params.id], (err) => {
        if (err) return res.send({ success: false, messege: "Something Went Wrong" })

        res.send({ success: true, messege: "Employee Record Updated" })
    })
})

//@method DELETE 
//@desc deleteData Both Student || Employee
//@PATH /ams/admin/manage/delete/:id
const deleteData = asyncHandler(async(req, res) => {
    const { type } = req.body
    if (!req.params.id || !type)
        return res.send({ success: false, messege: "Student Not Selected" })

    let id
    if (type == "students") {
        id = "enrollmentno"
    } else {
        id = "employeeid"
    }
    var deleteStudentQuery = `DELETE FROM ${type} WHERE ${id}=?`

    con.query(deleteStudentQuery, [req.params.id], (err) => {
        if (err)
            return res.send({ success: false, messege: err })
        res.send({ success: true, messege: "Record Deleted" })
    })
})

//@method POST 
//@desc ADD Subjects
//@PATH /ams/admin/subjects/add
const addSubjects = asyncHandler(async(req, res) => {
    const { type, subjectName, semesterId } = req.body
    if (!type || !subjectName || !semesterId)
        return res.send({ success: true, messege: "Please Fill Proper Data" })

    var addSubjectQuery = "INSERT INTO subjects(type,subjectName,semesterid)VALUES(?,?,?)"
    con.query(addSubjectQuery, [type, subjectName, semesterId], (err) => {
        if (err) return res.send({ success: true, messege: "Something Went Wrong" })

        res.send({ success: true, messege: "Subject Added" })
    })
})

//@method PUT 
//@desc UPDATE Subjects
//@PATH /ams/admin/subjects/update
const updateSubjects = asyncHandler(async(req, res) => {
    const { type, subjectName, semesterId } = req.body
    if (!type || !subjectName || !semesterId)
        return res.send({ success: true, messege: "Please Fill Proper Data" })

    var updateSubjectQuery = "UPDATE subjects SET type=?,subjectName=?,semesterid=?"
    con.query(updateSubjectQuery, [type, subjectName, semesterId], (err) => {
        if (err) return res.send({ success: true, messege: "Something Went Wrong" })

        res.send({ success: true, messege: "Subject Updated" })
    })
})

//@method DELETE 
//@desc DELETE Subjects
//@PATH /ams/admin/subjects/delete/:subid
const deleteSubject = asyncHandler(async(req, res) => {
    if (!req.params.id)
        return res.send({ success: true, messege: "Subject Not Selected" })

    var deleteSubjectQuery = "DELETE FROM subjects WHERE subjectid=?"
    con.query(deleteSubjectQuery, [req.params.id], (err) => {
        if (err) return res.send({ success: true, messege: "Something Went Wrong" })

        res.send({ success: true, messege: "Subject Deleted" })
    })
})

//@method GET 
//@desc get All Subjects
//@PATH /ams/admin/subjects/getSubjects
const getSubjects = asyncHandler(async(req, res) => {
    var getSubjectsQuery = "SELECT * FROM subjects"
    con.query(getSubjectsQuery, (err, subjects) => {
        if (err) return res.send({ success: true, messege: "Something Went Wrong" })

        res.send({ success: true, subjects: subjects })
    })
})

module.exports = {
    addStudent,
    updateStudent,
    deleteData,
    addEmployee,
    updateEmployee,
    addSubjects,
    updateSubjects,
    deleteSubject,
    getSubjects
};