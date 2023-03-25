const express = require('express')
const router = express.Router()
const { employeeLogin, takeAttendance, getAllEmployees, responseQueryToStudent, updateStudentAttendace } = require('../controllers/employeeController')

router.get('/', getAllEmployees)
router.post('/login', employeeLogin)
router.route('/attendance').post(takeAttendance).put(updateStudentAttendace)
router.post('/query', responseQueryToStudent)

module.exports = router