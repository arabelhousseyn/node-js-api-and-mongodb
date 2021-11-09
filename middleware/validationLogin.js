
const validation = (req,res,next) => {
      if(req.body.username && typeof req.body.username == "string" && req.body.password
      && typeof req.body.password == "string")
      {
          next()
      }else{
          res.status(500).json({message : "missing data"})
      }
}

module.exports = validation