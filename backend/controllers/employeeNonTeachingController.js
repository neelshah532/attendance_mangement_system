const asyncHandler = require("express-async-handler");
const { connectDb } = require("../config/db");
const con = connectDb();

//@method POST 
//@desc addStudents
//@PATH /ams/login
const addStudent = asyncHandler(async(req, res) => {
    const { enrollmentNo, firstName, middleName, lastName, dob, gender, email, phone, password, flatNo, area, city, state, pincode, division, semester, programid } = req.body
    if (!enrollmentNo || !firstName || !middleName || !lastName || !dob || !gender || !email || !phone || !password || !flatNo || !area || !city || !state || !pincode || !division || !semester || !programid)
        return res.send({ success: false, messege: "Please Fill Proper Data" })

    var semesterSubjectsQuery = `SELECT subjects.subjectname FROM subjects INNER JOIN semesters ON subjects.semesterid=semesters.semesterid WHERE semesters.semestername=? && subjects.type=?`
    var getStudentSubjects = await new Promise((resolve) => {
            con.query(semesterSubjectsQuery, [semester, 'Regular'], (err, results) => {

            })
        })
        // res.send(getStudentSubjects)
});

module.exports = { addStudent };