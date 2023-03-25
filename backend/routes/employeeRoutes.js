const express = require('express')
const router = express.Router()
const { employeeLogin, getEmployeesById, takeAttendance, getAllEmployees, responseQueryToStudent, updateStudentAttendace, getStudentsQuery } = require('../controllers/employeeController')

router.get('/', getAllEmployees)
router.get('/:id', getEmployeesById)
router.post('/login', employeeLogin)
router.post('/attendance', takeAttendance)
router.put('/attendance/:id', updateStudentAttendace)
router.post('/query', responseQueryToStudent)
router.get('/query/:id', getStudentsQuery)


module.exports = router