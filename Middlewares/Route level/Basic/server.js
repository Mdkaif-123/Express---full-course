const express = require('express');
const route = require('./routes/signup');
const app = express();

app.use('/login', route);

app.get('/', (req,res) =>{
    res.send('Home')
})

app.listen('3000', () => console.log('Running http://localhost:3000'))