const jwt = require('jsonwebtoken')

const verifyToken =  (req,res,next) => {
    const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(403).json({message : 'A token is required for authentication'})
  }
  try {
    const decode = jwt.verify(token,process.env.ACCESS_TOKEN)
    if(decode)
    {
      next()
    }
  } catch (error) {
    res.status(403).json({message : "incorrect token"})
  }
}

module.exports = verifyToken