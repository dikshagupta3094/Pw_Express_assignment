const userModel = require('../models/user.model.js')
const cookieOptions ={
  maxAge:7*60*1000,
  secure:false,
  httpOnly:true
}

exports.register = async(req,res)=>{
  
  try {
    const {name,username,password,email,bio} = req.body

     const userExist = await userModel.findOne({email})
     if(userExist){
      return res.status(400).json({
          success:false,
          message:'Already have account'
      })
     }
  
    const user = await userModel.create({
      name,
      username,
      password,
      email,
      bio  
  })
   if(!user){
      return res.status(400).json({
          success:false,
          message:'User registration failed,PlEASE TRY AGAIN!!'
      })
   }
   
  
   user.password = undefined
   const token = user.generateJwtToken()
   console.log(token);
   res.cookie('token',token,cookieOptions)
   return res.status(201).json({
      success:true,
      message:'User register successfully',
      user
  })
  } catch (error) {
    console.log(error);
  }
} 

exports.login = async(req,res)=>{
  try {
  const {username,password} = req.body
  
  const user = await userModel.findOne({username})
  if(!user){
    return res.status(400).json({
      success:false,
      message:'User not registered, PlEASE SIGNUP FIRST'
    })
  }
  
  const isMatch = await user.comparePassword(password)
  console.log("Comparison result",isMatch);
  if(!(user.username && isMatch)){
    return res.status(400).json({
      success:false,
      message:'username or password not matched'
    })
  }
  
  const token = await user.generateJwtToken()
  res.cookie('token',token,cookieOptions)
  user.password = undefined
  return res.status(200).json({
    success:true,
    message:'Login successfully',
    user
  })

  } catch (error) {
   console.log(error);
}
  
}

exports.HomePage = async(req,res)=>{
   const {_id,email} = req.user
   
   const user = await userModel.findOne({email})
   if(!user){
    return res.status(400).json({
      success:false,
      message:'Your are not authorized'
    })
   }

   return res.status(200).json({
    success:true,
    message:'successfully fetch users details',
    user
  })
} 