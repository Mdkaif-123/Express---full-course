import express from "express"
const app = express();
const PORT = process.env.PORT || 3000


const cb1 = (req,res,next) =>{
    console.log("Callback 1");
    next()
}
const cb2 = (req,res,next) =>{
    console.log("Callback 2");
    next()
}
const cb3 = (req,res,next) =>{
    console.log("Callback 3");
    next()
}
const cb4 = (req,res,next) =>{
    console.log("Callback 4");
    next()
}

// app.get("/arrayCallback",[cb1,cb2,cb3,cb4] )


// ?COMBINATION CALLBACK

app.get("/combination", [cb1,cb2,cb3,cb4], (req,res) =>{
    res.send("Combination  callback")
})



app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
})