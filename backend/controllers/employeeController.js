const asyncHandler = require('express-async-handler')
const { connectDb } = require('../config/db')
const con = connectDb()

//@method GET
//@desc Get Employee
//@PATH /ams/employees/

const getEmployees = asyncHandler(async(req, res) => {
    res.send({ messege: "GETTING" })
})


//@method POST
//@desc Login Employee
//@PATH /ams/employees/login
const employeeLogin = asyncHandler(async(req, res) => {
    res.send({ messege: "Login" })
})

//@desc Take attendance of students
//@method POST
//@PATH /ams/employees/attendance
const takeAttendance = asyncHandler(async(req, res) => {
    const { subject, date, attendance, employeeid } = req.body

    if (!subject || !date || !attendance || !employeeid) {
        res.send(res.json({ success: false, messege: "Please Fill Data" }))
    } else {
        var getColumnIFExsist = `SHOW COLUMNS FROM ${subject}`
        con.query(getColumnIFExsist, (err, rows, fields) => {
            if (err)
                throw err

            var i = 1
            var k = 0
            var arrayColumns = []
            while (i <= rows.length) {
                arrayColumns.push(rows[k].Field)
                k++
                i++
            }

            var checkColumn = arrayColumns.indexOf(date)
            if (checkColumn < 1) {
                var addColumnSql = `ALTER TABLE ${subject} ADD ${date} int(10)`
                con.query(addColumnSql, (err) => {
                    if (err)
                        throw err
                })
            }
            for (const [enrollment, attend] of Object.entries(attendance)) {
                var insertAttendanceSql = `UPDATE ${subject} SET ${date}=? WHERE enrollmentno=? && employeeid=?`
                con.query(insertAttendanceSql, [attend, enrollment, employeeid], (err) => {
                    if (err)
                        throw err
                })
            }
            res.json({ success: true, messege: "Attendance Submitted" })
        })
    }
})

//@desc Update  of students
//@method PUT
//@PATH /ams/employees/attendance
const updateStudentAttendace = asyncHandler(async(req, res) => {
    res.send({ messege: "Update Attendance" })
})

//@desc Take attendance of students
//@method POST
//@PATH /ams/employees/query
const responseQueryToStudent = asyncHandler(async(req, res) => {
    res.send({ messege: "RESPONSE TO STUNDET" })
})

module.exports = {
    employeeLogin,
    takeAttendance,
    getEmployees,
    updateStudentAttendace,
    responseQueryToStudent
}