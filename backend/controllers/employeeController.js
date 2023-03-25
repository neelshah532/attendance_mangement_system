const asyncHandler = require('express-async-handler')
const { connectDb } = require('../config/db')
const con = connectDb()

//@method GET
//@desc Get Employee
//@PATH /ams/employees/
const getEmployeesById = asyncHandler(async(req, res) => {

    var getEmployeesById = "SELECT * FROM employees where employeeid=?"
    const employee = await new Promise((resolve) => {
        con.query(getEmployeesById, [req.params.id], (err, res) => {
            if (err)
                res.send({ success: false, messege: "Something Went Wrong" })
            resolve(res)
        })
    })

    var getSubjectsTakeByEmployee = "SELECT subjects.subjectname FROM subjects INNER JOIN divisions ON divisions.subjectid = subjects.subjectid INNER JOIN employees ON divisions.employeeid = employees.employeeid WHERE employees.employeeid= ?"
    var getSubjects = await new Promise((resolve) => {
        con.query(getSubjectsTakeByEmployee, [req.params.id], (err, result) => {
            if (err)
                res.send({ success: false, messege: "Something Went Wrong" })

            resolve(result)
        })
    })
    res.send({ success: true, employee: employee, subjects: getSubjects })

})

//@method GET
//@desc Get Employee
//@PATH /ams/employees/
const getAllEmployees = asyncHandler(async(req, res) => {
    var getAllEmployees = "SELECT employeeid, firstname,middlename,lastname,gender,email FROM employees"
    con.query(getAllEmployees, (err, result) => {
        if (err)
            res.send({ success: false, messege: "Something Went Wrong" })

        res.send({ success: true, employees: result })
    })

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
        con.query(getColumnIFExsist, (err, rows) => {
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
                        res.send({ success: false, messege: "Something Went Wrong" })
                })
            }
            for (const [enrollment, attend] of Object.entries(attendance)) {
                var insertAttendanceSql = `UPDATE ${subject} SET ${date}=? WHERE enrollmentno=? && employeeid=?`
                con.query(insertAttendanceSql, [attend, enrollment, employeeid], (err) => {
                    if (err)
                        res.send({ success: false, messege: "Something Went Wrong" })
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
    getEmployeesById,
    getAllEmployees,
    updateStudentAttendace,
    responseQueryToStudent
}