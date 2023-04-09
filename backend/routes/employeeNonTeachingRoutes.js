const express = require("express");
const router = express.Router();
const { addStudent, updateStudent, deleteStudent } = require("../controllers/employeeNonTeachingController");

router.post("/manageStudent/add", addStudent);

router.put("/manageStudent/update/:id", updateStudent);

router.delete("/manageStudent/delete/:id", deleteStudent);

module.exports = router;