const ProductSchema = require("../models/productModel");


exports.blog = (req, res) => {
    return res.send("Hello Blog, My name is el");
  }

exports.products = async (req, res) => {
  try {
    const products = await ProductSchema.find({});
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductSchema.findById(id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


exports.postProduct = async (req, res) => {
  const { name, quantity, price } = req.body;
  console.log(name,quantity,price)

  try {
    const product = await ProductSchema.create(req.body);
    return res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

// update a product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductSchema.findByIdAndUpdate(id, req.body);
    // we cannot find any product in database
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    const updatedProductSchema = await ProductSchema.findById(id);
    return res.status(200).json(updatedProductSchema);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// delete a product

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductSchema.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    return res.status(200).json({message:`succesfully deleted ${id} `});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
