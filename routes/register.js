const express = require('express')
const router = express.Router()
const registerController = require('../controller/registerController')
const {body} = require('express-validator')
body('')
router.post('/',body('email').isEmail().normalizeEmail(),registerController.register)

module.exports = router