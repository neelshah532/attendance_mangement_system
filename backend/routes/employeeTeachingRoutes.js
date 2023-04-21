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
    getStudentsByDivision
} = require("../controllers/employeeTeachingController");

router.get("/:type", getAllEmployees);

router.get("/getEmployeeProfile/:id", getEmployeesById);

router.get("/queries/:id", getStudentsQuery);

router.get("/getStudentAttendance/:id/:subject/:enrollmentNo", getStudentsAttendance);

router.post("/queries", responseQueryToStudent);

router.get("/attendance/:employeeid/:subject", getAllTakenAttendances);

router.get("/attendancedates/:employeeid/:date/:subject", getAttendanceByDate);

router.post("/takeAttendance", takeAttendance);

router.put("/updateAttendance", updateStudentAttendance);

router.get('/getEmployeesSubjects/:id', getEmployeesSubjects)

router.get('/getStudentsByDivision/:subject/:id', getStudentsByDivision)

module.exports = router;