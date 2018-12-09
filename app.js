const path = require("path")

const express = require("express")

const shopRouter = require("./router/shop")
const adminRouter = require("./router/admin")

const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(shopRouter)
app.use("/admin", adminRouter)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})

app.listen(3000)