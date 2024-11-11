const jwt = require('jsonwebtoken')

const validateToken = (req, res, next) => {

    const secretkey="147741147741147741147741"
    const token = req.headers.authorization
    console.log(token)

    if(!token){
        return res.status(401).json({message: "Invalid Request"}) 
    }
    try{
        const validate= jwt.verify(token, secretkey)
        const exp = validate.exp
        if (exp < (Date.now()/1000)){
            res.status(500).json({message:"token expired"})
    }
        next()
    }catch (error){
        return res.status(500).json({message: "Invalid token"})
    }
}
module.exports = validateToken;