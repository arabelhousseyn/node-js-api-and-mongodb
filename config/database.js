const mongo = require('mongoose')
let dbo;
mongo.connect(process.env.DB_CONNECTION,(err,db) => {
    if(err) throw err
    dbo = db
 })

 module.exports = dbo