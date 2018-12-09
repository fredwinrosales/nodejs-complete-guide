const express = require("express")

const shopRouter = require("./router/shop")
const adminRouter = require("./router/admin")

const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(shopRouter)
app.use("/admin", adminRouter)

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found!</h1>")
})

app.listen(3000)