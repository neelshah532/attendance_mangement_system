const express = require("express");
const router = express.Router();
const { addStudent } = require("../controllers/employeeNonTeachingController");

router.post("/manageStudent/ADD", addStudent);

module.exports = router;