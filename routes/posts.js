const express = require('express')
const router = express.Router()
const postController = require('../controller/postController')
router.get('/',(req,res) => {
    console.log('we are in the main of the posts')
})

router.post('/',postController.insertPost)
router.get('/all-posts',postController.getPosts)
router.put('/update-post/:id',postController.updatePost)
router.delete('/delete-post/:id',postController.deletePost)

module.exports = router