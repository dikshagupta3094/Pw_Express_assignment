const jwt = require('jsonwebtoken')
const validator = require('email-validator')
const authUser = async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
        return res.status(400).json({
            success:false,
            message:'PLEASE LOGIN AGAIN TO ACCESS THIS PAGE'
        })
    }
    const user = jwt.verify(token,process.env.JWT_SCERET_KEY)
    req.user = user
    next()
}

const signupValidator = async(req,res,next)=>{
  
    const {name,username,password,email,bio} = req.body
    console.log(name,username,password,email,bio);
    if(!name || !username || !email || !password || !bio){
        return res.status(400).json({
            success:false,
            message:'All fields are required'
        })
      }

    const emailCheck = validator.validate(email)

    if(!emailCheck){
        return res.status(400).json({
            success:false,
            message:'Email is not in valid format'
        })
    }

    next()
}

const loginValidator = async(req,res,next)=>{
    const {username,password} = req.body
    if(!username || !password){
        return res.status(400).json({
          success:true,
          message:'All fields are required'
        })
      }
      next()
    
}
module.exports = {
    authUser,
    signupValidator,
    loginValidator
}

