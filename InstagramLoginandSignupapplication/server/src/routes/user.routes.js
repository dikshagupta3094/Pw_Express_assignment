const express = require('express')
const { register, login,HomePage } = require('../controllers/user.controller.js')
const { authUser, signupValidator, loginValidator } = require('../middleware/user.middleware.js')
const routes = express.Router()

routes.get('/', authUser ,HomePage)
routes.post('/Signup',signupValidator,register)
routes.post('/login',loginValidator,login)

module.exports = routes