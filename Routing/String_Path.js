import express from "express"
const app = express();
const PORT = process.env.PORT || 3000


//? String PATH

app.get("/", (req,res) =>{
    res.send("Home")
})
app.get("/about", (req,res) =>{
    res.send("About")
})
app.get("/contact", (req,res) =>{
    res.send("Contact")
})


app.listen(PORT, () =>{
    console.log(`Running on http://localhost:${PORT}`);
})