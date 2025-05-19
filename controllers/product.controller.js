const Product = require('../models/productModel');
const StatusCode = require('../constant/statusCode');
const { uploadImageToGitHub } = require('../github');
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() }).array('file'); 

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
      .limit(Number(limit));

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
// exports.createProduct = async (req, res) => {
//   upload(req, res, async (err) => {
//     if (err) {
//       console.error('Upload error:', err);
//       return res.status(StatusCode.badRequest).json({
//         error: 'Error uploading file',
//         details: err.message,
//       });
//     }

//     try {
//       const {
//         name,
//         description,
//         price,
//         oldPrice,
//         discount,
//         colors,
//         selectedColor,
//         stock,
//         highlights,
//         specs,
//         modelNumber,
//         modelName,
//         whatsInTheBox,
//         isPopular,
//         isNewArrival,
//         isDiscover,
//         category,
//         brand,
//       } = req.body;

//       // Parse arrays safely
//       const parsedColors = JSON.parse(colors || '[]');
//       const parsedHighlights = JSON.parse(highlights || '[]');
//       const parsedSpecs = JSON.parse(specs || '{}');
//       const parsedWhatsInTheBox = JSON.parse(whatsInTheBox || '[]');

//       if (!name || !price || !category || !brand) {
//         return res
//           .status(StatusCode.badRequest)
//           .json({ error: 'Missing required fields' });
//       }

//       // Validate file-color count match
//       if (
//         !req.files ||
//         req.files.length === 0 ||
//         parsedColors.length !== req.files.length
//       ) {
//         return res.status(StatusCode.badRequest).json({
//           error: 'Colors and image files must match in count.',
//         });
//       }

//       const folderPath = `products/${Date.now()}`;

//       const uploadedUrls = await Promise.all(
//         req.files.map((file, idx) =>
//           uploadImageToGitHub(file, `${folderPath}/${idx + 1}`)
//         )
//       );

//       // Pair each color with its image URL
//       const imagesAndColors = {};
//       parsedColors.forEach((color, idx) => {
//         imagesAndColors[color] = uploadedUrls[idx];
//       });

//       const productData = {
//         name,
//         description,
//         colors: parsedColors,
//         price: Number(price),
//         oldPrice: Number(oldPrice),
//         discount: Number(discount),
//         selectedColor,
//         stock: Number(stock),
//         highlights: parsedHighlights,
//         specs: parsedSpecs,
//         modelNumber,
//         modelName,
//         whatsInTheBox: parsedWhatsInTheBox,
//         isPopular: isPopular === 'true',
//         isNewArrival: isNewArrival === 'true',
//         isDiscover: isDiscover === 'true',
//         category,
//         brand,
//         imagesAndColors,
//         rating: 0,
//         reviewsCount: 0,
//         reviews: [],
//       };

//       const product = await Product.create(productData);
//       res.status(StatusCode.created).json(product);
//     } catch (error) {
//       console.error('Error creating product:', error);
//       res.status(StatusCode.badRequest).json({ error: error.message });
//     }
//   });
// };

// Delay utility
 
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

exports.createProduct = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error('Upload error:', err);
      return res.status(StatusCode.badRequest).json({
        error: 'Error uploading file',
        details: err.message,
      });
    }

    try {
      const {
        name,
        description,
        price,
        oldPrice,
        discount,
        colors,
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

      const parsedColors = JSON.parse(colors || '[]');
      const parsedHighlights = JSON.parse(highlights || '[]');
      const parsedSpecs = JSON.parse(specs || '{}');
      const parsedWhatsInTheBox = JSON.parse(whatsInTheBox || '[]');

      if (!name || !price || !category || !brand) {
        return res
          .status(StatusCode.badRequest)
          .json({ error: 'Missing required fields' });
      }

      if (
        !req.files ||
        req.files.length === 0 ||
        parsedColors.length !== req.files.length
      ) {
        return res.status(StatusCode.badRequest).json({
          error: 'Colors and image files must match in count.',
        });
      }

      const folderPath = `products/${Date.now()}`;
      const uploadedUrls = [];

      for (let i = 0; i < req.files.length; i++) {
        const file = req.files[i];
        console.log(`Uploading image ${i + 1}/${req.files.length}: ${file.originalname}`);

        try {
          const url = await uploadImageToGitHub(file, `${folderPath}/${i + 1}`);
           await sleep(5000);
          uploadedUrls.push(url);
          console.log(`Uploaded: ${url}`);
          if (i < req.files.length - 1) await sleep(3000);
          if(uploadedUrls.length != req.files.length)
            await sleep(1000);
        } catch (uploadErr) {
          console.error(`Upload failed for ${file.originalname}:`, uploadErr.message);
          return res.status(500).json({ error: 'Image upload failed', details: uploadErr.message });
        }
      }

      const imagesAndColors = {};
      parsedColors.forEach((color, idx) => {
        imagesAndColors[color] = uploadedUrls[idx];
      });

      const productData = {
        name,
        description,
        colors: parsedColors,
        price: Number(price),
        oldPrice: Number(oldPrice),
        discount: Number(discount),
        selectedColor,
        stock: Number(stock),
        highlights: parsedHighlights,
        specs: parsedSpecs,
        modelNumber,
        modelName,
        whatsInTheBox: parsedWhatsInTheBox,
        isPopular: isPopular === 'true',
        isNewArrival: isNewArrival === 'true',
        isDiscover: isDiscover === 'true',
        category,
        brand,
        imagesAndColors,
        rating: 0,
        reviewsCount: 0,
        reviews: [],
      };

      const product = await Product.create(productData);
      res.status(StatusCode.created).json(product);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(StatusCode.badRequest).json({ error: error.message });
    }
  });
};





// Update an existing product
exports.updateProduct = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(StatusCode.badRequest).json({ error: 'Error uploading file' });
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

      if (req.files && req.files.length > 0) {
        const uploaded = await Promise.all(
          req.files.map((file, idx) => uploadImageToGitHub(file, (idx + 1).toString()))
        );
        updatedProductData.images = uploaded; // replace images array
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        updatedProductData,
        { new: true }
      );

      res.json(updatedProduct);
    } catch (error) {
      res.status(StatusCode.badRequest).json({ error: error.message });
    }
  });
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

