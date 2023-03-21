const express = require('express')
const cookieParser = require('cookie-parser')
const router = express.Router();

const app = express();

app.use(cookieParser())
let users = {
    name: "Kaif",
    Age: "18"
}

//Route for adding cookie
app.get('/setuser', (req, res) => {
    res.cookie("userData", users);
    res.cookie('intrest', 'c,c++')
    res.send('user data added to cookie');
});

//Iterate users data from cookie
app.get('/getuser', (req, res) => {
    //shows all the cookies
    res.send(req.cookies);
    console.log(req.cookies);
});

app.get('/deletecookie', (req,res) =>{
    res.clearCookie('userData')
    res.send('deleted')
})




module.exports = app;


