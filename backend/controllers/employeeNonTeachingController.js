const asyncHandler = require("express-async-handler");
const { connectDb } = require("../config/db");
const con = connectDb();

const addStudent = asyncHandler(async(req, res) => {
    const { enrollmentno, } = req.body
});

module.exports = { addStudent };