const asyncHandler = require('express-async-handler')
const { connectDb } = require('../config/db')
const con = connectDb()

const getAttendanceStudents = asyncHandler(async(req, res) => {
    if (!req.params)
        return res.send({ success: false, messege: "Please Send Data Properly" })

    const { enrollmentno, subject } = req.params

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
    if (getColumnNames.length === 0)
        return res.send({ success: false, messege: "No Data in this Subject" })

    var promises = []
    for (const dates of getColumnNames) {
        var checkNullDataQuery = `SELECT ${dates} FROM ${subject} WHERE enrollmentno=?`
        var promise = await new Promise((resolve) => {
            con.query(checkNullDataQuery, [enrollmentno], (err, counter) => {
                if (err)
                    return res.send({ success: false, messege: "No Attendance Records Found Yet" })

                if (counter[0] === undefined) {
                    return res.send({ success: false, messege: "Invalid Username" })
                } else {
                    resolve(counter[0])
                }
            })
        })
        promises.push(promise)
    }
    if (promise.length === 0)
        return res.send({ success: false, messege: "No Attendance Records Found Yet" })

    res.send({ success: true, attendance: promises })
})

const updateAttendance = asyncHandler(async(req, res) => {
    const { subject, date, enrollmentno, attend } = req.body
    if (!subject && !date && !enrollmentno && !attend)
        return res.send({ success: false, messege: "Please Send Proper Data" })

    var getStudentAttendancetillnow = `Select enrollmentno,Totalstudentattendtillnow from ${subject} WHERE enrollmentno=?`;
    var attendTillNow = await new Promise((resolve) => {
        con.query(
            getStudentAttendancetillnow, [enrollmentno],
            (err, results) => {
                if (err)
                    return res.send({ success: false, messege: "Something Went Wrong" })

                if (results === undefined) {
                    resolve(null)
                } else {
                    var data = JSON.parse(JSON.stringify(results))
                    resolve(data[0])
                }
            }
        );
    });

    if (attendTillNow.length === 0) {
        return res.send({ success: false, messege: "No Attendance or Wrong Enrollmentno" })
    } else {
        var newTotalAttendAttendance
        if (attend === 1) {
            newTotalAttendAttendance = attendTillNow.Totalstudentattendtillnow + 1
        } else {
            newTotalAttendAttendance = attendTillNow.Totalstudentattendtillnow - 1
        }
        var updateAttendanceSql = `UPDATE ${subject} SET ${date}=?,Totalstudentattendtillnow=? WHERE enrollmentno=?`
        con.query(updateAttendanceSql, [attend, newTotalAttendAttendance, enrollmentno], (err) => {
            if (err) {
                return res.send({ success: false, messege: "Something Went Wrong" })
            } else {
                res.send({ success: true, messege: "Student Attendance Updated" })
            }
        })
    }
})
module.exports = { getAttendanceStudents, updateAttendance }