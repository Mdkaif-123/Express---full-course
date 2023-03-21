const express = require('express')
const login = require('./middleware/login-middleware')
const router = require('./Routes/login')
const app = express()

app.use('/login', router)

app.use('/',login)

app.get('/', (req,res) =>{
    res.send('Home')
})

app.listen('3000', () => console.log('Running : http://localhost:3000'))