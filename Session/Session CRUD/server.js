const express = require('express')
const session = require('express-session')
const app = express();
const serverSession = require('./routes/session')

// THIS IS THE SESSION 
// 

app.use(session({
    name : 'userSession',
    secret: 'iamgood',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge : 12876 }

}))

app.use('/', serverSession)

app.listen('3000', () => console.log('Running http://localhost:3000'))