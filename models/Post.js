const mongo = require('mongoose')

const postSchema = mongo.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongo.model('post',postSchema)