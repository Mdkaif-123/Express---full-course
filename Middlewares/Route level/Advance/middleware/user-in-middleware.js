const session = require('express-session')
const express = require('express')
const session = require('express-session')

const app = express()


const userEntered = (req, res, next) => {
    app.use(session({
        secret: 'iamgood',
        saveUninitialized: true,
        cookie: { maxAge : 100000 }
    }))

    console.log('working');
    // console.log(req.session);
    next();
}

module.exports = userEntered