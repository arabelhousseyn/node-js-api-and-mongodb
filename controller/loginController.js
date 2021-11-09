const user = require('../models/User')

const login = async (req,res) => {
    await user.findOne({username : 'hocine12'})
    .then(e => {
        res.json({success : e})
    })
    .catch(err => {
        res.json({success : false})
    })
}

module.exports = {
    login
}