const express = require("express");
const router = express.Router();
const {
    addStudent,
    updateStudent,
    addEmployee,
    updateEmployee,
    deleteData,
    addSubjects,
    updateSubjects,
    deleteSubject,
    getSubjects,
    allocateSubjectsToEmployee,
    addProgram,
    deleteProgram,
    getAllQuery,
} = require("../controllers/employeeNonTeachingController");
const {
    getStudentsQuery,
    getAllEmployees,
    updateStudentAttendance,
    getAllTakenAttendances,
    getAttendanceByDate,
} = require("../controllers/employeeTeachingController");
const {
    studentData,
    attendanceOfStudent,
    monthlyAttendanceOfStudent,
} = require("../controllers/studentsController");

// Students
router.post("/manageStudent/ADD", addStudent);

router.put("/manageStudent/update", updateStudent);

router.get("/manageStudent/get/:division/:semester", studentData);

// Employees
router.post("/manageEmployee/ADD", addEmployee);

router.put("/manageEmployee/update", updateEmployee);

router.get("/manageEmployee/get", getAllEmployees);

router.delete("/manage/delete/:id/:type", deleteData);

// Attendances
router.get(
    "/getStudentsAttendance/:subject/:enrollmentNumber",
    attendanceOfStudent
);

router.put("/updateStudentAttendance", updateStudentAttendance);

router.put(
    "/getAllTakenAttendance/:employeeid/:subject",
    getAllTakenAttendances
);

router.put("/getAttendanceByDate/:employeeid", getAttendanceByDate);

router.get(
    "/getStudentMonthlyAttendance/:id/:subject/:month",
    monthlyAttendanceOfStudent
);

// Subjects

router.get("/subjects/getSubjects", getSubjects);

router.post("/subjects/add", addSubjects);

router.put("/subjects/update/:id", updateSubjects);

router.delete("/subjects/delete/:id", deleteSubject);

// Allocate Subjects to Employees
router.post("/allocateSubjects", allocateSubjectsToEmployee);

// queries
router.get("/query/:id", getStudentsQuery);

router.get("/getAllqueries", getAllQuery);

// program
router.post("/manageProgram/add", addProgram);

router.delete("/manageProgram/delete/:id", deleteProgram);

module.exports = router;