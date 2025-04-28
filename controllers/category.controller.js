const Category = require('../models/categoryModel');
const Product = require('../models/productModel');
const { uploadImageToGitHub } = require('../github');
const multer = require('multer');

// Set up multer storage (in-memory storage)
const upload = multer({ storage: multer.memoryStorage() }).single('image'); // 'image' is the key name from the form-data

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
  // Use multer to handle file upload
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: 'Error uploading file' });
    }

    try {
      const { name, description } = req.body;
      const categoryData = { name, description };

      // Check if fileName is passed and is valid
      const fileName = req.query.fileName || "2"; 
      if (!["1", "2", "3", "4"].includes(fileName)) {
        return res.status(400).json({ error: 'Invalid fileName parameter' });
      }

      // Check if the file is present in the request
      if (req.file) {
        // If there's a file, upload to GitHub
        const uploadedFileUrl = await uploadImageToGitHub(req.file, fileName);
        categoryData.image = uploadedFileUrl;
      } else {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      // Save the category with the image URL
      const category = new Category(categoryData);
      await category.save();
      res.status(201).json(category);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
};

exports.updateCategory = async (req, res) => {
  // Use multer to handle the file upload
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: 'Error uploading file' });
    }

    try {
      const { name, description } = req.body;
      const categoryData = { name, description };

      // If there is a file, upload to GitHub
      if (req.file) {
        const fileName = req.query.fileName || 2; // Get fileName from query params (default 2 for categories)
        categoryData.image = await uploadImageToGitHub(req.file, fileName);
      }

      // Update category with the new data (with or without image)
      const category = await Category.findByIdAndUpdate(req.params.id, categoryData, { new: true });
      res.json(category);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
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
