const express = require('express')
const router = express.Router()
const { employeeLogin, getEmployeesById, takeAttendance, getAllEmployees, responseQueryToStudent, updateStudentAttendace, getStudentsQuery, getStudentsAttendance } = require('../controllers/employeeController')

router.get('/', getAllEmployees)
router.get('/:id', getEmployeesById)
router.get('/query/:id', getStudentsQuery)
router.get('/getStudentAttendance/:id', getStudentsAttendance)
router.post('/login', employeeLogin)
router.post('/attendance', takeAttendance)
router.put('/attendance/:id', updateStudentAttendace)
router.post('/query', responseQueryToStudent)


module.exports = router