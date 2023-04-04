const asyncHandler = require('express-async-handler')
const { connectDb } = require('../config/db')
const con = connectDb()

//@method GET
//@desc Get Students
//@PATH /ams/students/
const studentData = asyncHandler(async(req, res) => {
    // Query MySQL for student data
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
//@PATH /ams/students/
const login = asyncHandler(async (req, res) => {
    const { enrollmentno, password, email } = req.body;
  
    let type;
    let tableName;
    let data
    if(enrollmentno){
       type="students"
       tableName="enrollmentno"
       data=enrollmentno
    }else{
      type="employees"
      tableName="email"
      data=email
    }
  
    con.query(`SELECT enrollmentno FROM ${type} WHERE ${tableName} = ? && password=?`, [data,password], (error, studentResults) => {
      if (error)
        return res.send({success:false,messege:"Something Went Wrong"})
        if(studentResults[0]){
            res.send({ success: true, students: studentResults[0] });
        }else{
            res.send({ success: false, messege: "Incorrect Username or Password" });
        }
    });
  });

//@method GET
//@desc Get Students
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


const getStudentsAttendance = asyncHandler(async(req, res) => {
    const { subject, enrollmentNumber } = req.body;
    var getStudentAttendance = `SELECT TotalLecturestillnow,Totalstudentattendtillnow FROM ${subject} WHERE enrollmentno=? `;
    var getAttendance = await new Promise((resolve) => {
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
    studentData,
    getStudentsById,
    getStudentsAttendance,
    login

}