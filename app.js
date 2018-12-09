const express = require("express")

const adminRouter = require("./router/admin")
const shopRouter = require("./router/shop")

const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(shopRouter)
app.use(adminRouter)

app.listen(3000)