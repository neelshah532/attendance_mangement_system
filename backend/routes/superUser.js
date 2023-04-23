const express = require('express')
const router = express.Router()
const { studentData, attendanceOfStudent } = require('../controllers/studentsController')
const { getAllEmployees } = require('../controllers/employeeTeachingController')
const { deleteData, getAllQuery } = require('../controllers/employeeNonTeachingController')

//View Student
router.get('/getStudents/:division/:semester', studentData)

router.get('/attend/:subject/:enrollmentNumber', attendanceOfStudent)

//View Employee
router.get('/getEmployees/:type', getAllEmployees)

router.delete('/deleteData/:id/:type', deleteData)

router.get('/queries/:employeeid', getAllQuery)

module.exports = router