const mysql = require('mysql')

const connectDb = () => {
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'attendance_management_system'
    })
    return conn;
}

module.exports = { connectDb }