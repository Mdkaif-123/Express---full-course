import express from "express"
const app = express();
const PORT = process.env.PORT || 3000


//?REGULAR EXPRESSION IS A METHOD THAT HIT WHEN ANY OF THE URL CHARACTER MATHES WITH CAUGHT CHAR

app.get(/a/, (req,res) =>{
    res.send("HEllo")
})


app.listen(PORT, () =>{
    console.log(`Running on http://localhost:${PORT}`);
})