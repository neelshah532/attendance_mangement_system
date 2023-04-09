const express = require("express");
const router = express.Router();
const { addStudent, updateStudent, addEmployee, updateEmployee, deleteData } = require("../controllers/employeeNonTeachingController");
const { studentData } = require("../controllers/studentsController");
const { getAllEmployees } = require("../controllers/employeeTeachingController");

// Students
router.post("/manageStudent/ADD", addStudent);

router.put("/manageStudent/update/:id", updateStudent);

router.get("/manageStudent/get", studentData);

// Employees
router.post("/manageEmployee/ADD", addEmployee);

router.put("/manageEmployee/update/:id", updateEmployee);

router.get("/manageEmployee/get", getAllEmployees);

router.delete("/manage/delete/:id", deleteData);

module.exports = router;