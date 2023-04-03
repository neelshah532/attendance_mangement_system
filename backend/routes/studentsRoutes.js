const express = require('express')
const router = express.Router()
const { studentData, getStudentsById, getStudentsAttendance, login} = require('../controllers/studentsController')

router.get('/', studentData)
router.post('/login', login)
router.get('/:id', getStudentsById)
router.get('/getStudentAttendance/:id', getStudentsAttendance)

module.exports = router