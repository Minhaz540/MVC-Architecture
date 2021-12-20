const users = require("../models/users.model");


exports.getUsers = (req, res) => {
	res.render("index");
};

exports.saveUsers = (req, res) => {
	const user = {
		name: req.body.name,
		age: Number(req.body.age),
	};

	users.push(user);
	res.status(200).json({
		message: "Success",
		users,
	});
};
