const express = require('express');
const userEntered = require('../middleware/user-in-middleware');
const route = express.Router();
const app = express()
const session = require('express-session')

route.use('/login', userEntered)


route.get('/login', (req, res) => {
    res.send("Welcome to the login page")
})

route.get('/signup', (req, res) => {
    res.send("Welcome to the signup page")
})


module.exports = route