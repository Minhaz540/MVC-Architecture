const express = require("express");
const routes = express.Router();
const userController = require("../controllers/user.controller");
const { getUsers, saveUsers } = require("../controllers/users.controller");

routes.get("/", getUsers);

routes.post("/user", saveUsers);

module.exports = routes;
