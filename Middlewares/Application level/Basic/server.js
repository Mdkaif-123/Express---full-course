// ? Middleware functions are functions that have access to the request object (req),
// ? the response object (res), and the next middleware function in the application’s 
// ? request-response cycle. The next middleware function is commonly denoted by a variable named next.

const express = require('express')
const app = express()


//* CREATING OUR MIDDLEWARE

app.use('/', (req,res,next) =>{
    console.log('Middleware called');
    next(); //! CALLING THE NEXT FUNCTION
})


app.get('/', (req,res) =>{
    res.send('Home Page')
})

app.get('/about', (req,res) =>{
    res.send('about Page')
})

app.get('/help', (req,res) =>{
    res.send('help Page')
})


app.listen('3000', () => console.log(' Running : http://localhost:3000'))
