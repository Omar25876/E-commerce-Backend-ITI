const Brand = require('../models/brandModel');
const Product = require('../models/productModel');
const StatusCode = require('../constant/statusCode');

// Get all brands
exports.getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (err) {
    res.status(StatusCode.internalServerError).json({ error: err.message });
  }
};

// Get brand by ID
exports.getBrandById = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) {
      return res.status(StatusCode.notFound).json({ message: 'Brand not found' });
    }
    res.json(brand);
  } catch (err) {
    res.status(StatusCode.internalServerError).json({ error: err.message });
  }
};

exports.createBrand = async (req, res) => {
    try {
      const { name } = req.body;
      const brand = new Brand(
        {
          name,
        }
      );
      await brand.save();
      res.status(201).json(brand);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
};

// Update a brand
exports.updateBrand = async (req, res) => {
  try {
    const updatedBrandData = req.body;

    const updatedBrand = await Brand.findByIdAndUpdate(req.params.id, updatedBrandData, { new: true });
    if (!updatedBrand) {
      return res.status(StatusCode.notFound).json({ message: 'Brand not found' });
    }

    res.json(updatedBrand);
  } catch (err) {
    res.status(StatusCode.badRequest).json({ error: err.message });
  }
};

// Delete a brand
exports.deleteBrand = async (req, res) => {
  try {
    const deletedBrand = await Brand.findByIdAndDelete(req.params.id);
    if (!deletedBrand) {
      return res.status(StatusCode.notFound).json({ message: 'Brand not found' });
    }
    res.json({ message: 'Brand deleted' });
  } catch (err) {
    res.status(StatusCode.internalServerError).json({ error: err.message });
  }
};

// Get products by brand
exports.getProductsByBrand = async (req, res) => {
  try {
    const products = await Product.find({ brand: req.params.brand });
    res.json(products);
  } catch (err) {
    res.status(StatusCode.internalServerError).json({ error: err.message });
  }
};
