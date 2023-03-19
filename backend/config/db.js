const mysql = require('mysql')

const connectDb = () => {
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'student'
    })
    return conn;
}

module.exports = { connectDb }