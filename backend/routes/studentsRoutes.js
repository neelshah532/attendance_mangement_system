const express = require('express')
const router = express.Router()
const { studentData, getStudentsById, getStudentsAttendance, login, getStudentsByDivision,getStudentsBySubjectTypeAndDivision} = require('../controllers/studentsController')

const { studentData, getStudentsById, getStudentsAttendance, login, monthlyAttendanceOfStudent } = require('../controllers/studentsController')
const { responseQueryToStudent } = require('../controllers/employeeTeachingController')
router.get('/', studentData)

router.post('/login', login)

router.get('/:id', getStudentsById)

router.get('/getStudentAttendance/:id', getStudentsAttendance)
router.get('/getStudentsByDivision/:division', getStudentsByDivision)
router.get('/xyz/', getStudentsBySubjectTypeAndDivision)
// router.get('/getStudentsByDivision/:enrollmentno/:division', getStudentsByDivision)

router.get('/getStudentAttendanceByMonth/:id', monthlyAttendanceOfStudent)

router.post('/responseToEmployee', responseQueryToStudent)

module.exports = router