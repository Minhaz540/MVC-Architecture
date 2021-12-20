const express = require("express");
const app = express();
const usersRoutes = require("./routes/users.routes");
require("dotenv").config();

const { HOSTNAME, PORT } = process.env;
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(usersRoutes);

const htmlForm = `
    `;

app.use((req, res, next) => {
	res.status(404).json({ message: "Page Not Found" });
	next();
});

app.listen(PORT, (req, res) => {
	console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});
