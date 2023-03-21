import express from "express"
const app = express();
const PORT = process.env.PORT || 3000


// ?CALLBACK IS A FUNCTION THAT IS CALLED WHEN A ROUTE GOT A HTTP REQUEST 

// IT IS A SINGLE CALL BACK EXAMPLE
app.get("/kaif", (req,res) =>{
    res.send("Hello Kaif")
})


app.listen(PORT, () =>{
    console.log(`Running on http://localhost:${PORT}`);
})