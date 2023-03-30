const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const port = process.env.PORT || 5000
const { connectDb } = require('./config/db')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const connection = connectDb()

connection.connect((err) => {
    if (err) throw err

    console.log("Mysql_DataBase_Connected".cyan.underline)
})

app.use('/ams/employees', require('./routes/employeeRoutes'))
app.use('/ams/students', require('./routes/studentsRoutes'))

app.listen(port, () => { console.log("Server Started and Port Number = ", port) })