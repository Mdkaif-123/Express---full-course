import express from "express"
const app = express();
const PORT = process.env.PORT || 3000

//? PREFIX PATH IS A PATH THAT IS THERE AFTER A PATH 

app.get("/api/*", (req,res) =>{ //? EVERY PATH AFTER THE API WILL GET THIS RESPONSE
    res.send("API path")
})



app.listen(PORT, () =>{
    console.log(`Running on http://localhost:${PORT}`);
})