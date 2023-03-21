const express = require('express')
const router = express.Router()


router.get('/', (req,res) =>{
    res.send("<h1>Welcome !</h1> <br> <p>Please login here....s</p>")
})



module.exports  = router