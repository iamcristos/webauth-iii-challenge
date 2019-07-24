const express = require('express');
const route = express.Router();
const userCntr = require('../controller/users');
const validation = require('../middleware/users');
const auth = require('../helpers/auth')

route.post('/register',validation.validateBody, validation.validateUsername,userCntr.registerUser)
route.post('/login', validation.validatePassword, userCntr.loginUser);
route.get('/', auth.authUser,validation.getUserSession, userCntr.getUser)

module.exports = route;

