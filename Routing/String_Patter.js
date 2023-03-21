import express from "express"
const app = express();
const PORT = process.env.PORT || 3000

app.get("/AB?CD", (req,res) =>{
    res.send("It will return when user will hit AB or ABCD") // ?It will only return the response when user will hit AB or ABCD
})


app.listen(PORT, () =>{
    console.log(`Running on http://localhost:${PORT}`);
})