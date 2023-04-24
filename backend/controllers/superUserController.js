const asyncHandler = require('express-async-handler')
const { connectDb } = require('../config/db')
const con = connectDb()

const getAttendanceStudents = asyncHandler(async(req, res) => {
    const { enrollmentno, subject } = req.params
    if (!req.params)
        return res.send({ success: false, messege: "Please Send Data Properly" })

    console.log(enrollmentno)
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
        console.log(dates)
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

module.exports = { getAttendanceStudents }