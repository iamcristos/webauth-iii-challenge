const dotenv = require('dotenv');

dotenv.config();

module.exports={
    sessionSecret: process.env.SESSION_SECRET,
    jwtSecret: process.env.JWT_SECRET
}