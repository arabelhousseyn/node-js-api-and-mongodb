const post = require('../models/Post')
const insertPost = async (req,res) => {
    let insert = new post({
        title : req.body.title,
        description : req.body.description,
    })

    let save = await insert.save()
    res.json(save)
}

const getPosts = async (req,res) => {
    await post.find()
    .then(e=> {
        res.json(e)
    })
    .catch(err => {
        console.log(err)
    })
}

const updatePost = async (req,res) => {
    if(req.params.id !== null)
    {
       await post.findByIdAndUpdate(req.params.id,req.body)
        .then(e=>{
            res.json(JSON.stringify({success : true}))
        })
        .catch(err => {
            console.log(err)
        })
    }
     res.json(JSON.stringify({message : 'id not found'}))
}

const deletePost = async (req,res) => {
     if(req.params.id !== null)
     {
         await post.findByIdAndDelete(req.params.id)
         .then(e=>{
            res.json(JSON.stringify({success : true}))
         })
         .catch(err => {
            console.log(err)
         })
     }
     res.json(JSON.stringify({message : 'id not found'}))
}

module.exports = {
    insertPost,
    getPosts,
    updatePost,
    deletePost
}