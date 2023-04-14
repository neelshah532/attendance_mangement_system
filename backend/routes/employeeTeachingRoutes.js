const express = require("express");
const router = express.Router();
const {
    getEmployeesById,
    takeAttendance,
    getAllEmployees,
    responseQueryToStudent,
    updateStudentAttendance,
    getStudentsQuery,
    getStudentsAttendance,
    getAllTakenAttendances,
    getAttendanceByDate,
    getEmployeesSubjects,
} = require("../controllers/employeeTeachingController");

router.get("/", getAllEmployees);

router.get("/:id", getEmployeesById);

router.get("/query/:id", getStudentsQuery);

router.get("/getStudentAttendance/:id/:subject/:enrollmentNo", getStudentsAttendance);

router.post("/query", responseQueryToStudent);

router.get("/attendance/:employeeid/:subject", getAllTakenAttendances);

router.get("/attendancedates/:employeeid/:date/:subject", getAttendanceByDate);

router.post("/takeAttendance", takeAttendance);

router.put("/updateAttendance", updateStudentAttendance);

router.get('/getEmployeesSubjects/:id', getEmployeesSubjects)

module.exports = router;