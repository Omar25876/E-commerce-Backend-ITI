// controllers/categoryController.js
const Category = require('../models/categoryModel');
const Product = require('../models/productModel');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const categoryData = { name, description };

    // Check if an image is uploaded
    if (req.file) {
      categoryData.image = req.file.path; // Add the image path to the category data
    }

    const category = new Category(categoryData);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.updateCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const categoryData = { name, description };

    // Check if an image is uploaded
    if (req.file) {
      categoryData.image = req.file.path; // Add the new image path
    }

    const category = await Category.findByIdAndUpdate(req.params.id, categoryData, { new: true });
    res.json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
