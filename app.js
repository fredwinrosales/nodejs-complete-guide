const express = require("express")

const app = express()

//app.use((req, res, next) => 
//{
//    console.log("In the middleware!")
//    next()
//})

//app.use((req, res, next) => 
//{
//    console.log("In another middleware!")
//    res.send("<h1>This is a response!</h1>")
//})

app.use("/users", (req, res, next) => 
{
    res.send("<h1>This is \"/users\" route!</h1>")
})

app.use("/", (req, res, next) => 
{
    res.send("<h1>This is \"/\" route!</h1>")
})

app.listen(3000)