const express = require('express')
const router = express.Router()
const loginController = require('../controller/loginController')
const validationLogin = require('../middleware/validationLogin')
router.post('/',validationLogin,loginController.login)

module.exports = router