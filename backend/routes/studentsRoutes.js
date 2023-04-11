const express = require('express')
const router = express.Router()
const { studentData, getStudentsById, getStudentsAttendance, login, monthlyAttendanceOfStudent, getStudentsBySubjectTypeAndDivision,getStudentsByDivision } = require('../controllers/studentsController')
const { responseQueryToStudent } = require('../controllers/employeeTeachingController')

router.get('/', studentData)

router.post('/login', login)

router.get('/:id', getStudentsById)

router.get('/getStudentAttendance', getStudentsAttendance)

router.get('/getStudentAttendanceByMonth/:id', monthlyAttendanceOfStudent)

router.post('/responseToEmployee', responseQueryToStudent)
// router.post('/getStudentsBySubjectTypeAndDivision', getStudentsBySubjectTypeAndDivision)
router.post('/getStudentsByDivision/:division', getStudentsByDivision)

module.exports = router