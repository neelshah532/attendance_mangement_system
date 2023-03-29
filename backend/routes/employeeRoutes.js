const express = require('express')
const router = express.Router()
const { employeeLogin, getEmployeesById, takeAttendance, getAllEmployees, responseQueryToStudent, updateStudentAttendace, getStudentsQuery, getStudentsAttendance } = require('../controllers/employeeController')

router.get('/', getAllEmployees)
router.get('/:id', getEmployeesById)
router.get('/query/:id', getStudentsQuery)
router.get('/getStudentAttendance/:id', getStudentsAttendance)

router.post('/login', employeeLogin)
router.post('/query', responseQueryToStudent)
router.post('/query/:id', getStudentsQuery)

router.route('/attendance').post(takeAttendance).put(updateStudentAttendace)

module.exports = router