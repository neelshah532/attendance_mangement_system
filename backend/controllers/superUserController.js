const asyncHandler = require('express-async-handler')
const { connectDb } = require('../config/db')
const con = connectDb()

const getAttendanceStudents = asyncHandler(async(req, res) => {
    console.log(req.params)
    const { enrollmentno, subject } = req.params
    if (!req.params)
        return res.send({ success: false, messege: "Please Send Data Properly" })

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
    var promises = []
    for (const dates of getColumnNames) {
        var checkNullDataQuery = `SELECT ${dates} FROM ${subject} WHERE enrollmentno=?`
        var promise = await new Promise((resolve) => {
            con.query(checkNullDataQuery, [enrollmentno], (err, counter) => {
                resolve(counter[0])
            })
        })
        promises.push(promise)
    }
    res.send({ success: true, attendance: promises })
})

const updateAttendance = asyncHandler(async(req, res) => {
    const { subject, date, enrollmentno, attend } = req.body
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

    if (attendTillNow == null) {
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