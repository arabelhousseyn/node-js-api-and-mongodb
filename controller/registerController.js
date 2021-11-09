const user = require('../models/User')
const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const register =  (req,res) => {

     bycrypt.hash(req.body.password,10,(err,hash) => {
        var token = jwt.sign({ foo: 'bar' }, 'secret')
        const insert = new user({
            fullName : req.body.fullName,
            username : req.body.username,
            phone : req.body.phone,
            email : req.body.email,
            password : hash,
            token : token
        })
        let save = insert.save()
        if(save)
        {
            res.json({success : true})
        }else{
            res.json({success : false})
        }
    })
}

module.exports = {
    register
}