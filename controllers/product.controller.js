const Product = require('../models/productModel');
const StatusCode = require('../constant/statusCode');
const upload = require('../middlewares/multerConfig'); 

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const { page = 1, limit = 10, sort, category, minPrice, maxPrice, type } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (minPrice) filter.price = { ...filter.price, $gte: Number(minPrice) };
    if (maxPrice) filter.price = { ...filter.price, $lte: Number(maxPrice) };
    if (type === 'popular') filter.isPopular = true;
    if (type === 'new') filter.isNewArrival = true;
    if (type === 'discover') filter.isDiscover = true;

    let sortOption = {};
    if (sort === 'price-low-to-high') sortOption.price = 1;
    else if (sort === 'price-high-to-low') sortOption.price = -1;
    else if (sort === 'rating') sortOption.rating = -1;
    else sortOption.createdAt = -1;

    const products = await Product.find(filter)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Product.countDocuments(filter);

    res.json({ total, page: Number(page), limit: Number(limit), products });
  } catch (err) {
    res.status(StatusCode.internalServerError).json({ error: err.message });
  }
};

// Get product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(StatusCode.notFound).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a product
exports.createProduct = async (req, res) => {
  try {
    const productData = req.body;
    
    if (req.files && req.files.length > 0) {
      const imagePaths = req.files.map(file => `/uploads/products/${file.filename}`);
      productData.images = imagePaths;
    }

    const product = new Product(productData);
    await product.save();
    res.status(StatusCode.created).json(product);
  } catch (err) {
    res.status(StatusCode.badRequest).json({ error: err.message });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
  } catch (err) {
    res.status(StatusCode.badRequest).json({ error: err.message });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(StatusCode.internalServerError).json({ error: err.message });
  }
};
