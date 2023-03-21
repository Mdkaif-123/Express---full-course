const express = require('express');
const route = require('./routes/register-methods');
const app = express()
const session = require('express-session')

app.use('/regiseter', route)


app.get('/', (req, res) => {
    res.send('Home')
})

app.listen('3000', () => console.log('Running http://localhost:3000'))