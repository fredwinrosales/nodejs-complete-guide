const path = require("path")

const express = require("express")

const shopRouter = require("./router/shop")
const adminRouter = require("./router/admin")

const bodyParser = require("body-parser")

const app = express()

app.set("view engine", "ejs")
app.set("views", "views")

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminRouter.routes)
app.use(shopRouter)

app.use((req, res, next) => {
    res.status(404).render("404", {title: "404 Not Found"})
})

app.listen(3000)