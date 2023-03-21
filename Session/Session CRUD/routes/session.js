const session = require('express-session')
const express = require('express')
const router = express.Router();

// CREATING THE SESSION 
router.get('/getSession', (req,res) =>{
    //SESSION IS CREATED USING req.session
    const sess = req.session;

    // SESSION CAN BE VIEWED THIS METHOD
    console.log(req.session.id);
    console.log(req.session.cookie);
    console.log(req.session.cookie.maxAge);
    res.send(sess)
})

//SESSION CAN BE DESTROYED BY THIS METHOD
router.get('/deleteSession', (req,res) =>{
    req.session.destroy((err) =>{
        if (err) {
            console.log(err);
        } else {
            res.send('deleted')
        }
    })
})


// SESSION VARIALBLE
router.get('/sign', (req,res) =>{
    // SESSION VARIABLE ACN BE CREATED USING THIS METHOD
    req.session.email = "mdkaif@1233";
    res.send(req.session)
})

router.get('/login', (req,res) =>{
    if(req.session.email){
        
        if(req.session.email == 'mdkaif@1233'){
            res.send('You are allowed')
        } else{
            res.send('not allowed')
        }
    } else{
        res.send('You are not loged in')
    }
})

module.exports = router;
