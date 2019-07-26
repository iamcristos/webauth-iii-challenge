const db = require('../model/users');
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/secrets')
const response = require('./response');

module.exports = {
    async authUser(req, res, next) {
        const {token} = req.headers;
        if(!token) {
            return response.errorHandler(res, 401, "Token is required")
        }
        try {
            const decoded = await jwt.verify(token, jwtSecret)
            const verifyUser = await db.loginUser(decoded.username)
           if(!verifyUser) {
               return response.errorHandler(res, 401, "Invalid user")
           }
           next()
        } catch (error) {
            return response.errorHandler(res, 401, "Invalid token type")
        }
    }
}