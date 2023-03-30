
const express = require('express')
const router = express.Router()
const { studentData, getStudentsById    } = require('../controllers/studentsController')

router.get('/', studentData)
router.get('/:id', getStudentsById)

module.exports = router



  