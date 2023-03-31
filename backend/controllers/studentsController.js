const asyncHandler = require('express-async-handler')
const { connectDb } = require('../config/db')
const con = connectDb()

//@method GET
//@desc Get Employee
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


module.exports = {
        studentData,
        getStudentsById
    }
    // const express = require('express')
    // const mysql= require('mysql')
    // const app = express()
    // const con = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '',
    //     database: 'attendance_management_system'
    // })
    // con.connect((err) => {
    //     if(err){
    //         console.log(err)
    //     } else{
    //         console.log("Connected")
    //     }
    // })

// app.get("/fetch",(req,res) => {
//     con.query("SELECT * FROM students",function(err,result){
//         if(err) {
//             console.log(err)
//         } else {
//             res.send(result)
//         }
//     })
// })

// app.listen(5000,() => {
//     if(err){
//         console.log(err)
//     } else{
//         console.log("on port 5000")
//     }
// })