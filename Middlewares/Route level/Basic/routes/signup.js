const express = require('express')
const route = express.Router()

//* 1st Method of creating a route middleware
// route.use((req,res,next) =>{
//     let count = 0;
//     count++;
//     console.log(count);
//     next();
// })


//* 2nd Method of creating a route middleware
const middleware = (req,res,next) =>{
        let count = 0;
    count++;
    console.log(count);
    next();
}


route.get('/', middleware, (req,res) =>{
    res.send('Welcome to the login page')
})


module.exports = route