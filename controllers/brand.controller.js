const Brand = require('../models/brandModel');
const Product = require('../models/productModel');

exports.getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBrandById = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) return res.status(404).json({ message: 'Brand not found' });
    res.json(brand);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBrand = async (req, res) => {
  try {
    const { name, description } = req.body;
    const brandData = { name, description };

    if (req.file) {
      brandData.image = req.file.path; 
    }

    const brand = new Brand(brandData);
    await brand.save();
    res.status(201).json(brand);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update Brand with Image
exports.updateBrand = async (req, res) => {
  try {
    const { name, description } = req.body;
    const brandData = { name, description };

    if (req.file) {
      brandData.image = req.file.path; // Add the new image path
    }

    const brand = await Brand.findByIdAndUpdate(req.params.id, brandData, { new: true });
    res.json(brand);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteBrand = async (req, res) => {
  try {
    await Brand.findByIdAndDelete(req.params.id);
    res.json({ message: 'Brand deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductsByBrand = async (req, res) => {
  try {
    const products = await Product.find({ brand: req.params.brand });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
