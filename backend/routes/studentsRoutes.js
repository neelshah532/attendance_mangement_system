const express = require('express')
const router = express.Router()
const { studentData, getStudentsById, login, monthlyAttendanceOfStudent, getStudentsByDivision, attendanceOfStudent } = require('../controllers/studentsController')
const { responseQueryToStudent } = require('../controllers/employeeTeachingController')

router.get('/', studentData)

router.post('/login', login)

router.get('/getStudent/:id', getStudentsById)

router.get('/attend/:subject/:enrollmentNumber', attendanceOfStudent)

router.get('/getStudentAttendanceByMonth/:id/:subject/:month', monthlyAttendanceOfStudent)

router.post('/responseToEmployee', responseQueryToStudent)

router.post('/getStudentsByDivision/:division', getStudentsByDivision)


module.exports = router