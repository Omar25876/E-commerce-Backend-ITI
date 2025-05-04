const Product = require('../models/productModel');
const StatusCode = require('../constant/statusCode');
const { uploadImageToGitHub } = require('../github');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() }).single('image');


const calculateAverageRating = (reviews) => {
  const reviewsCount = reviews.length;
  const rating =
    reviewsCount === 0
      ? 0
      : reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviewsCount;
  return {
    reviewsCount,
    rating: Math.round(rating * 10) / 10, 
  };
};

// Get all products with filters, sorting, and pagination
exports.getAllProducts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      sort,
      category,
      minPrice,
      maxPrice,
      type,
    } = req.query;
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
      .limit(Number(limit))
      .populate('brand category');

    const total = await Product.countDocuments(filter);

    res.json({ total, page: Number(page), limit: Number(limit), products });
  } catch (err) {
    res
      .status(StatusCode.internalServerError)
      .json({ error: err.message });
  }
};

// Get product by ID with populated references
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate('brand category')
      .populate('reviews.user', 'name email');
    if (!product)
      return res
        .status(StatusCode.notFound)
        .json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(StatusCode.internalServerError).json({ error: err.message });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res
        .status(StatusCode.badRequest)
        .json({ error: 'Error uploading file' });
    }

    try {
      const {
        name,
        description,
        price,
        oldPrice,
        discount,
        imagesAndColors,
        selectedColor,
        stock,
        highlights,
        specs,
        modelNumber,
        modelName,
        whatsInTheBox,
        isPopular,
        isNewArrival,
        isDiscover,
        category,
        brand,
      } = req.body;

      const productData = {
        name,
        description,
        price,
        oldPrice,
        discount,
        imagesAndColors,
        selectedColor,
        stock,
        highlights,
        specs,
        modelNumber,
        modelName,
        whatsInTheBox,
        isPopular,
        isNewArrival,
        isDiscover,
        category,
        brand,
        rating: 0,
        reviewsCount: 0,
        reviews: [],
      };

      if (req.file) {
        const fileName = req.query.fileName || '1'; 
        if (!['1', '2', '3', '4'].includes(fileName)) {
          return res
            .status(StatusCode.badRequest)
            .json({ error: 'Invalid fileName parameter' });
        }
        const uploadedFileUrl = await uploadImageToGitHub(req.file, fileName);
        productData.images = [uploadedFileUrl]; 
      }

      const product = new Product(productData);
      await product.save();
      res.status(StatusCode.created).json(product);
    } catch (err) {
      res.status(StatusCode.badRequest).json({ error: err.message });
    }
  });
};

// Update an existing product
exports.updateProduct = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res
        .status(StatusCode.badRequest)
        .json({ error: 'Error uploading file' });
    }

    try {
      const {
        name,
        description,
        price,
        oldPrice,
        discount,
        imagesAndColors,
        selectedColor,
        stock,
        highlights,
        specs,
        modelNumber,
        modelName,
        whatsInTheBox,
        isPopular,
        isNewArrival,
        isDiscover,
        category,
        brand,
      } = req.body;

      const updatedProductData = {
        name,
        description,
        price,
        oldPrice,
        discount,
        imagesAndColors,
        selectedColor,
        stock,
        highlights,
        specs,
        modelNumber,
        modelName,
        whatsInTheBox,
        isPopular,
        isNewArrival,
        isDiscover,
        category,
        brand,
      };

      if (req.file) {
        const fileName = req.query.fileName || '1'; // Default 1 for products
        if (!['1', '2', '3', '4'].includes(fileName)) {
          return res
            .status(StatusCode.badRequest)
            .json({ error: 'Invalid fileName parameter' });
        }
        const uploadedFileUrl = await uploadImageToGitHub(req.file, fileName);
        updatedProductData.images = [uploadedFileUrl]; // Replace images
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        updatedProductData,
        { new: true }
      );
      res.json(updatedProduct);
    } catch (err) {
      res.status(StatusCode.badRequest).json({ error: err.message });
    }
  });
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res
      .status(StatusCode.internalServerError)
      .json({ error: err.message });
  }
};


exports.addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const userId = req.user._id;

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(StatusCode.notFound).json({ message: 'Product not found' });
    }

    const existingReviewIndex = product.reviews.findIndex(
      (review) => review.user.toString() === userId.toString()
    );

    if (existingReviewIndex !== -1) {
     
      product.reviews[existingReviewIndex].rating = rating;
      product.reviews[existingReviewIndex].comment = comment;
      product.reviews[existingReviewIndex].createdAt = new Date();
    } else {
   
      product.reviews.push({
        user: userId,
        rating,
        comment,
        createdAt: new Date()
      });
    }

  
    const { rating: avgRating, reviewsCount } = calculateAverageRating(product.reviews);
    product.rating = avgRating;
    product.reviewsCount = reviewsCount;

    await product.save();

    res.status(StatusCode.ok).json({
      message: "Review submitted successfully",
      product,
    });
  } catch (err) {
    res.status(StatusCode.internalServerError).json({
      message: 'Failed to submit review',
      error: err.message,
    });
  }
};

