const express = require('express')
const sessions = require('express-session')
const cookie = require('cookie-parser')
const ejs = require('ejs')

const app = express();

app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const oneDay = 1000 * 60 * 60 * 24;

//?session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));

const email = 'kaif@123'
const username = 'kaif'
const password = '1234'

//! a variable to save a session

let session;

app.get('/', (req,res) =>{
    session = req.session;

    if(session.email){
        res.send(`Hey ${session.username} there, welcome <a href=\'/logout'>click to logout</a>`);
    }
    else{
        res.render('index')
    }
})

app.post('/user', (req,res) =>{
    if (req.body.username == username && req.body.password == password) {
        session = req.session;
        session.email = 'mdkaif123'
        session.username = 'kaif'
        res.redirect('/')
    } else {
        res.send('Invalid password')
    }
})

//! code for destroying the session

app.get('/logout', (req,res) =>{
    req.session.destroy();
    res.redirect('/')
})




app.listen('3000', () => {
    console.log('Running http://localhost:3000');
})