const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/secrets')

module.exports = {
    generateToken(user) {
        const payload = {
            subject: user.id,
            username: user.username
        };
        const options = {
            expiresIn: '1d'
        };
        return jwt.sign(payload, jwtSecret, options)
    },

    verifyToken(token) {
        return jwt.verify(token, jwtSecret)
    }
};