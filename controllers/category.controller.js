const Category = require('../models/categoryModel');
const Product = require('../models/productModel');
const Brand = require('../models/brandModel');

// Get all categories with populated brandNames
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate('brandNames');
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific category by ID with populated brandNames
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).populate('brandNames');
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 



// Create a new category
 
exports.createCategory = async (req, res) => {
  try {
    const { categoryName, brandNames } = req.body;

    if (!categoryName) {
      return res.status(400).json({ error: 'Category name is required' });
    }

    // Ensure brandNames is an array of ObjectId references
    const brandIds = Array.isArray(brandNames) ? brandNames : [];

    // Check if all brand IDs are valid
    const brands = await Brand.find({ '_id': { $in: brandIds } });
    if (brands.length !== brandIds.length) {
      return res.status(400).json({ error: 'One or more brand IDs are invalid' });
    }

    const category = new Category({
      categoryName: categoryName,
      brandNames: brandIds, // Pass the array of ObjectId strings
    });

    await category.save();
    res.status(201).json({
      message: 'Category created successfully',
      status: 201,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update an existing category
exports.updateCategory = async (req, res) => {
  try {
    const { categoryName, brandNames } = req.body;

    const updatedCategoryData = {};
    if (categoryName) updatedCategoryData.categoryName = categoryName;
    if (brandNames) updatedCategoryData.brandNames = brandNames;  // Keep brandNames as strings

    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      updatedCategoryData,
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.json({
      message: 'Category updated successfully',
      status: 200,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Delete a category
exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all products by category
exports.getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
