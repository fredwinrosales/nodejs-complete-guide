const path = require("path")

const express = require("express")

const rootDir = require("../util/path")
const adminData = require("./admin")

const router = express.Router()

router.get("/", (req, res, next) => 
{
    const products = adminData.products
    res.render("shop", {prods: products, title: "My Shop", page: "shop", hasProducts: products.length > 0})
})

module.exports = router