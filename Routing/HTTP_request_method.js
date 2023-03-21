import express from "express"
const app = express();
const PORT = process.env.PORT || 3000


// ?HTTP REQUEST METHOD 

app.get("/", (req,res) =>{
    res.send("Get request")
})

app.post("/", (req,res) =>{
    res.send("Post request")
})

app.put("/", (req,res) =>{
    res.send("Put request")
})

app.patch("/", (req,res) =>{
    res.send("Patch request")
})

app.delete("/", (req,res) =>{
    res.send("Delete request")
})

//* HTTP ALL METHOD - IT CALL by ANY OF THE HTTP REQUEST

app.all('/hello', (req,res) =>{
    console.log("All request")
})





app.listen(PORT, () =>{
    console.log(`Running on http://localhost:${PORT}`);
})