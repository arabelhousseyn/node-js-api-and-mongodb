const express = require('express')
const router = express.Router()
const postController = require('../controller/postController')
router.get('/',postController.getPosts)
router.post('/',postController.insertPost)
router.put('/update-post/:id',postController.updatePost)
router.delete('/delete-post/:id',postController.deletePost)

module.exports = router