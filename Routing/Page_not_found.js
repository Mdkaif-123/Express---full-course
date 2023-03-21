import express from "express"
const app = express();
const PORT = process.env.PORT || 3000

app.get("/", (req,res) =>{
    res.send("Home page")
})

// *IT RECEIVE THE REQUEST WHEN THERE IS NO MATCH WITH ALL THE ROUTE 
app.get('*', (req,res) =>{
    res.send("Page not found")
})

app.listen(PORT, () =>{
    console.log(`Running on http://localhost:${PORT}`);
})