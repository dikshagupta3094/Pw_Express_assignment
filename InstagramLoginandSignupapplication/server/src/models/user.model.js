const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        min:[8,"Password must be 8 character long"],
        required:true
    },
    bio:{
        type:String,
        required:true
    }
},{timestamps:true})

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        console.log(isModified('password'));
      return next();
    }
  
    try {
        this.password = await bcrypt.hash(this.password, 10);
        console.log(this.password);
        next();
    } catch (error) {
       console.log(error);  
    }
  });

userSchema.methods = {
    generateJwtToken: function(){
    const token =  jwt.sign({
        email:this.email,
        _id:this._id 
      },process.env.JWT_SCERET_KEY,
      {expiresIn:'24h'})

      return token
    },

    comparePassword: async function(plainPassword){
    try {
        return await bcrypt.compare(plainPassword,this.password)
    } catch (error) {
        console.log(error);
      }
    }
}

module.exports = mongoose.model('User',userSchema)