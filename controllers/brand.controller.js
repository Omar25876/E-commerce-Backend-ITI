const Brand = require('../models/brandModel');
const Product = require('../models/productModel');
const StatusCode = require('../constant/statusCode');
const { uploadImageToGitHub } = require('../github');
const multer = require('multer');
// Set up multer storage (in-memory storage)
const upload = multer({ storage: multer.memoryStorage() }).single('image'); // 'image' is the key name from the form-data

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
  // Use multer to handle file upload
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: 'Error uploading file' });
    }

    try {
      const { name, description } = req.body;
      const brandData = { name, description };

      // Check if fileName is passed and is valid
      const fileName = req.query.fileName || "3"; 
      if (!["1", "2", "3", "4"].includes(fileName)) {
        return res.status(400).json({ error: 'Invalid fileName parameter' });
      }

      // Check if the file is present in the request
      if (req.file) {
        // If there's a file, upload to GitHub
        const uploadedFileUrl = await uploadImageToGitHub(req.file, fileName);
        brandData.image = uploadedFileUrl;
      } else {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      // Save the category with the image URL
      const brand = new Brand(brandData);
      await brand.save();
      res.status(201).json(brand);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
};

// Update a brand
exports.updateBrand = async (req, res) => {
  try {
    const updatedBrandData = req.body;

    if (req.file) {
      const fileName = req.query.fileName || 3;
      updatedBrandData.image = await uploadImageToGitHub(req.file, fileName);
    }

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
