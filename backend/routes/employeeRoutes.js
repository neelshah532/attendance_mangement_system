const express = require('express')
const router = express.Router()
const { employeeLogin, takeAttendance, getEmployees, responseQueryToStudent, updateStudentAttendace } = require('../controllers/employeeController')

router.get('/', getEmployees)
router.post('/login', employeeLogin)
router.route('/attendance').post(takeAttendance).put(updateStudentAttendace)
router.post('/query', responseQueryToStudent)

module.exports = router