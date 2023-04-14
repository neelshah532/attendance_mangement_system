const asyncHandler = require("express-async-handler");
const { connectDb } = require("../config/db");
const con = connectDb();

//@method GET 
//@desc GET QUERIES
//@PATH /ams/superUser/queries
const getAllQueries = asyncHandler(async(req, res) => {
    var getQueries = "SELECT * FROM queries"
    con.query(getQueries, (err, result) => {
        if (err)
            return res.send({ success: false, messege: "Something Went Wrong" })

        res.send({ success: true, queries: result })
    })
})

module.exports = { getAllQueries }