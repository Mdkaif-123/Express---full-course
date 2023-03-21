const cookieParser = require('cookie-parser');
const express = require('express')
const cookie = require('./routes/cookie')
const app = express();

app.use('/', cookie);




app.listen('3000', () =>{
    console.log("Listening");
})