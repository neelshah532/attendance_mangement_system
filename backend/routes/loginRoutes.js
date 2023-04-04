const express = require('express')
const router = express.Router()
const { login} = require('../controllers/studentsController')

router.post('/login', login)

module.exports = router