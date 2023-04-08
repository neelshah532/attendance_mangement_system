const express = require("express");
const router = express.Router();
const {
    getEmployeesById,
    takeAttendance,
    getAllEmployees,
    responseQueryToStudent,
    updateStudentAttendace,
    getStudentsQuery,
    getStudentsAttendance,
    getAllTakenAttendances,
    getAttendanceByDate,
} = require("../controllers/employeeTeachingController");

router.get("/", getAllEmployees);
router.get("/:id", getEmployeesById);
router.get("/query/:id", getStudentsQuery);
router.get("/getStudentAttendance/:id", getStudentsAttendance);

router.post("/query", responseQueryToStudent);

router.get("/attendance/:employeeid", getAllTakenAttendances);

router.get("/attendancedates/:employeeid", getAttendanceByDate);

router.post("/takeAttendance", takeAttendance);

router.put("/updateAttendance", updateStudentAttendace);

module.exports = router;