const express = require("express");
const router = express.Router();
const { addStudent, updateStudent, deleteStudent } = require("../controllers/employeeNonTeachingController");
const { studentData } = require("../controllers/studentsController")

router.post("/manageStudent/ADD", addStudent);

router.put("/manageStudent/update/:id", updateStudent);

router.delete("/manageStudent/delete/:id", deleteStudent);

router.get("/manageStudent/get", studentData);

module.exports = router;