const mongoose = require('mongoose')
const DB_URI = process.env.DB_URI
const DB_NAME = process.env.DB_NAME
const databaseConnect = async()=>{
  try {
    const dbInstance = await mongoose.connect(`${DB_URI}/${DB_NAME}`)
    console.log("Database connected succesfully",dbInstance.connection.host)
  } catch (error) {
    console.log("Error while connecting DB",error);
  }
}

module.exports = databaseConnect