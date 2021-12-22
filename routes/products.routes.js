const express = require("express");
const { getProducts, saveProducts } = require("../controllers/products.controller");
const routes = express.Router();

routes.get("/product", getProducts);

routes.post("/product", saveProducts);

module.exports = routes;
