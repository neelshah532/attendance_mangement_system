const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const port = process.env.PORT || 5000
const { connectDb } = require('./config/db')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
const connection = connectDb()

connection.connect((err) => {
    if (err) throw err

    console.log("Mysql_DataBase_Connected".cyan.underline)
})

app.use('/ams', require('./routes/loginRoutes'))

app.use('/ams/students', require('./routes/studentsRoutes'))

app.use('/ams/employees', require('./routes/employeeTeachingRoutes'))

app.use('/ams/admin', require('./routes/employeeNonTeachingRoutes'))

app.use('/ams/superAdmin', require('./routes/superUser'))

app.listen(port, () => { console.log("Server Started and Port Number = ", port) })