const express =  require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const databaseConnect = require('./db/connect.db.js')
const routes = require('./routes/user.routes.js')

const corsOption = {
    origin:'http://localhost:5500',
    credentials:true
}
app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use('/api/v1/users',routes)
databaseConnect()
module.exports = app

