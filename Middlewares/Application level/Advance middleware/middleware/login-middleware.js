const express  = require('express')

const login = (req,res,next) =>{
    console.log('user loged in');
    next();
}



module.exports = login