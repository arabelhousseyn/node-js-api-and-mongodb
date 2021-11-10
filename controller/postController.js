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
            res.json(JSON.stringify({message : 'id not found'}))
        })
    }
     res.json(JSON.stringify({message : 'id missing'}))
}

const deletePost = async (req,res) => {
     if(req.params.id !== null)
     {
         await post.findByIdAndDelete(req.params.id)
         .then(e=>{
            res.json(JSON.stringify({success : true}))
         })
         .catch(err => {
            res.json(JSON.stringify({message : 'id not found'}))
         })
     }
     res.json(JSON.stringify({message : 'id missing'}))
}

module.exports = {
    insertPost,
    getPosts,
    updatePost,
    deletePost
}