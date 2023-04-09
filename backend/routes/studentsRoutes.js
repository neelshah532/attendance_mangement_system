const express = require('express')
const router = express.Router()
const { studentData, getStudentsById, getStudentsAttendance, login, getStudentsByDivision,getStudentsBySubjectTypeAndDivision} = require('../controllers/studentsController')

router.get('/', studentData)
router.post('/login', login)
router.get('/:id', getStudentsById)
router.get('/getStudentAttendance/:id', getStudentsAttendance)
router.get('/getStudentsByDivision/:division', getStudentsByDivision)
router.get('/xyz/', getStudentsBySubjectTypeAndDivision)
// router.get('/getStudentsByDivision/:enrollmentno/:division', getStudentsByDivision)

module.exports = router