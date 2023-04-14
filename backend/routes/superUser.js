const express = require('express')
const router = express.Router()
const { studentData, attendanceOfStudent } = require('../controllers/studentsController')
const { getAllEmployees } = require('../controllers/employeeTeachingController')
const { deleteData } = require('../controllers/employeeNonTeachingController')

//View Student
router.get('/getStudents', studentData)

router.get('/subjectAttendance/:subject/:enrollmentNumber', attendanceOfStudent)

//View Employee
router.get('/getEmployees', getAllEmployees)

router.delete('/deleteData/:id/:type', deleteData)

router.get('/queries', deleteData)

module.exports = router