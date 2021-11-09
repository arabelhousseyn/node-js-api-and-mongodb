const user = require('../models/User')
const bycrypt = require('bcrypt')
const login = async (req,res) => {
    
    await user.findOne({username : req.body.username})
    .then(e => {
        let compare = bycrypt.compare(req.body.password,e.password)
        compare.then(result => {
            if(result)
            {
                res.json(e)
            }else{
                res.status(404).json({message : "invalid data"})
            }
        })
    })
    .catch(err => {
        res.json({success : false})
    })
}

module.exports = {
    login
}