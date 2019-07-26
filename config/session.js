const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const store = new KnexSessionStore({
    knex: require('../data/dbConfig'),
    tablename: 'session',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 1 * 24 * 60 * 60 * 1000
});

module.exports = {
        name: 'user session',
        secret: require('./secrets').sessionSecret,
        cookie: {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            secure: false
        },
        httpOnly: true,
        resave: false,
        saveUninitialized: false,
        store
}