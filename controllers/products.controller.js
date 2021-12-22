const products = require("../models/products.model");


exports.getProducts = (req, res) => {
	res.render("products", {title: "Products | home"});
};

exports.saveProducts = (req, res) => {
	const product = {
		name: req.body.name,
		price: Number(req.body.price),
	};

	products.push(product);
	res.status(200).json({
		message: "Success",
		products,
	});
};
