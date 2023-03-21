import express from "express"
const app = express();
const PORT = process.env.PORT || 3000

//? CALLBACK NESTING IS THE PROCESS WHERE WE KEEP A CALLBACK INSIDE ANOTHER CALLBACK

app.get("/nestedCallback", (req, res, next) => {

    console.log("Callback 1");
    next()
}, (req, res, next) => {
    console.log("Callback 2");
    next()
}, (req, res, next) => {
    console.log("Callback 2");
    next()
}, (req, res, next) => {
    console.log("Callback 4");
    res.send("Callback Nesting ")
})


app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
})