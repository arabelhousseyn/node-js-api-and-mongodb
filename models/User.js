const mongo = require('mongoose')

const userSchema = mongo.Schema({
    fullName : {
        type : String,
        required: true
    },
    username : {
        type : String,
        required: true,
        unique : true
    },
    phone : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required: true
    },
    token : {
        type : String,
        required: true
    },
})

module.exports = mongo.model('user',userSchema)



