const user = require('../models/User')
const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
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
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
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