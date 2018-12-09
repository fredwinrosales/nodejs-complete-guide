const path = require("path")

const express = require("express")

const shopRouter = require("./router/shop")
const adminRouter = require("./router/admin")

const bodyParser = require("body-parser")

const app = express()

app.set("view engine", "pug")
app.set("views", "views")

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminRouter.routes)
app.use(shopRouter)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})

app.listen(3000)