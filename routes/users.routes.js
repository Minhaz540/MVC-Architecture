const express = require("express");
const routes = express.Router();
const { getUsers, saveUsers } = require("../controllers/users.controller");

routes.get("/", getUsers);

routes.post("/user", saveUsers);

module.exports = routes;
