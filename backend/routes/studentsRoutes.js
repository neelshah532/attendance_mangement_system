const express = require('express')
const router = express.Router()
const { studentData, getStudentsById, login, monthlyAttendanceOfStudent, attendanceOfStudent, getDailyAttendance, getQuery, getStudentSubjects, getEmployeesBySubject } = require('../controllers/studentsController')
const { responseQueryToStudent } = require('../controllers/employeeTeachingController')

router.get('/', studentData)

router.post('/login', login)

router.get('/getStudent/:id', getStudentsById)

router.get('/attend/:subject/:enrollmentNumber', attendanceOfStudent)

router.get('/getStudentAttendanceByMonth/:id/:subject/:month', monthlyAttendanceOfStudent)

router.post('/queries', responseQueryToStudent)

router.get('/getDailyAttendance/:subject/:id', getDailyAttendance)

router.get('/queries/:id', getQuery)

router.get('/getSubject/:id', getStudentSubjects)

router.get('/getEmployeesBySubjects/:subjectid', getEmployeesBySubject)


module.exports = router