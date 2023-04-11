const express = require("express");
const router = express.Router();
const { addStudent, updateStudent, addEmployee, updateEmployee, deleteData, addSubjects, updateSubjects, deleteSubject, getSubjects } = require("../controllers/employeeNonTeachingController");
const { getAllEmployees, updateStudentAttendance, getAllTakenAttendances, getAttendanceByDate } = require("../controllers/employeeTeachingController");
const { studentData, attendanceOfStudent, monthlyAttendanceOfStudent } = require('../controllers/studentsController')

// Students
router.post("/manageStudent/ADD", addStudent);

router.put("/manageStudent/update/:id", updateStudent);

router.get("/manageStudent/get", studentData);

// Employees
router.post("/manageEmployee/ADD", addEmployee);

router.put("/manageEmployee/update/:id", updateEmployee);

router.get("/manageEmployee/get", getAllEmployees);

router.delete("/manage/delete/:id", deleteData);

// Attendances
router.get('/getStudentsAttendance/:subject/:enrollmentNumber', attendanceOfStudent)

router.put('/updateStudentAttendance', updateStudentAttendance)

router.put('/getAllTakenAttendance', getAllTakenAttendances)

router.put('/getAttendanceByDate/:employeeid', getAttendanceByDate)

router.get('/getStudentMonthlyAttendance/:id/:subject/:month', monthlyAttendanceOfStudent)

// Subjects

router.get('/subjects/getSubjects', getSubjects)

router.post('/subjects/add', addSubjects)

router.put('/subjects/update/:id', updateSubjects)

router.delete('/subjects/delete/:id', deleteSubject)

module.exports = router;