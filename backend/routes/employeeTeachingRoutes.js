const express = require('express')
const router = express.Router()
const { getEmployeesById, takeAttendance, getAllEmployees, responseQueryToStudent, updateStudentAttendace, getStudentsQuery, getStudentsAttendance } = require('../controllers/employeeTeachingController')

router.get('/', getAllEmployees)
router.get('/:id', getEmployeesById)
router.get('/query/:id', getStudentsQuery)
router.get('/getStudentAttendance/:id', getStudentsAttendance)

router.post('/query', responseQueryToStudent)
router.post('/query/:id', getStudentsQuery)

router.route('/attendance').post(takeAttendance).put(updateStudentAttendace)


module.exports = router