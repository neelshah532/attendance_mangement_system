const express = require('express')
const router = express.Router()
const { studentData, getStudentsById, getStudentsAttendance, login, monthlyAttendanceOfStudent } = require('../controllers/studentsController')

router.get('/', studentData)
router.post('/login', login)
router.get('/:id', getStudentsById)
router.get('/getStudentAttendance/:id', getStudentsAttendance)
router.get('/getStudentAttendanceByMonth/:id', monthlyAttendanceOfStudent)

module.exports = router