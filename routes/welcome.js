const express = require('express')
const router = express.Router()
const welcomeController = require('../controller/welcomeController')
const auth = require('../middleware/auth')
router.get('/',auth,welcomeController.main)

module.exports = router