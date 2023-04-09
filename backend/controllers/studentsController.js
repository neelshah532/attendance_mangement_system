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
  
    con.query(`SELECT * FROM ${type} WHERE ${tableName} = ? && password=?`, [data,password], (error, studentResults) => {
      if (error)
        return res.send({success:false,messege:"Something Went Wrong"})
        if(studentResults[0]){
            res.send({ success: true, students: studentResults[0] });
        }else{
            res.send({ success: false, messege: "Incorrect Username or Password" });
        }
  
    // con.query('SELECT * FROM students WHERE enrollmentno = ?', [username], (error, studentResults) => {
    //   if (error) {
    //     throw error;
    //   }
  
    //   if (studentResults[0] && studentResults[0].password === password) {
    //     res.send({success: true, messege: "Welcome student!" });
    //   } else {
    //     con.query('SELECT * FROM employees WHERE email = ?', [email], (error, teacherResults) => {
    //       if (error) {
    //         throw error;
    //       }
  
    //       if (teacherResults[0] && teacherResults[0].password === password) {
    //         res.send({ success: true, messege: "Welcome Back!" });
    //       } else {
    //         res.send({ success: false, messege: "Invalid username or password" });
    //       }
    //     });
    //   }
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



// const getStudentsBySubjectTypeAndDivision = asyncHandler(async (req, res) => {
//     // const enrollmentno = req.params.enrollmentno;
//     // const subjectType = req.params.subjectType;
//     // const divisionClass = req.params.divisionClass;
//     const { subject, enrollmentno, subjectType, division } = req.body;
//     let query, values;
  
//     if (subjectType === 'elective') {
//       query = `SELECT * FROM ${subject}`;
//     } else if (subjectType === 'regular') {
//       query = `SELECT * FROM ${subject} WHERE division = ?`;
//       values = [division];
//     } else {
//       res.send({ success: false, message: 'Invalid subject type' });
//       return;
//     }
  
//     connection.query(query, values, (error, results, fields) => {
//       if (error) {
//         throw error;
//       }
  
//       res.send({success:true, results: results});
//     });
//   });


// display studetns by subject type and division (elective or regular)
const getStudentsBySubjectTypeAndDivision = asyncHandler(async (req, res) => {
    const { subject, subjectType, division } = req.body;

  let query;
  if (subjectType === 'elective') {
    query = `SELECT * FROM ${subject}`;
  } else if (subjectType === 'regular') {
    if (!division) {
      res.send({ success: false, message: 'Division is required for regular subjects' });
      return;
    }
    query = `SELECT * FROM students WHERE division = ?`;
  } else {
    res.send({ success: false, message: 'Invalid subject type' });
    return;
  }

  con.query(query, [division], (error, results, fields) => {
    if (error) {
      throw error;
    }
    res.send({success:true,results: results});
  });
});

// display all students divison wise

const getStudentsByDivision = asyncHandler(async (req, res) => {
    const { division } = req.params;
  
    const query = `SELECT * FROM students WHERE division = ?`;
    const values = [division];
  
    con.query(query, values, (error, results) => {
      if (error) {
        return res.send({ success: false, messege: 'Failed to retrieve students from the database', error });
      }
  
      res.send({
        success: true,
        students: results
      });
    });
  });

//   const getStudentsByDivision1 = asyncHandler(async (req, res) => {
//     const { division } = req.params;
  
//     const query = `SELECT * FROM students WHERE division = ?`;
  
//     con.query(query, [division], (error, results, fields) => {
//       if (error) throw error;
//       res.json(results);
//     });
//   });
  

module.exports = {
    studentData,
    getStudentsById,
    getStudentsAttendance,
    login,
    getStudentsByDivision,
    // getStudentsByDivision1
    getStudentsBySubjectTypeAndDivision

}