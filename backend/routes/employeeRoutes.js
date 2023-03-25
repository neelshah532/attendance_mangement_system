const express = require('express')
const router = express.Router()
const { employeeLogin, getEmployeesById, takeAttendance, getAllEmployees, responseQueryToStudent, updateStudentAttendace } = require('../controllers/employeeController')

router.get('/', getAllEmployees)
router.get('/:id', getEmployeesById)
router.post('/login', employeeLogin)
router.route('/attendance').post(takeAttendance).put(updateStudentAttendace)
router.post('/query', responseQueryToStudent)

module.exports = router