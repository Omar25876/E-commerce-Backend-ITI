const multer = require('multer');
const path = require('path');

// Define the storage configuration for images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Define the folder where images will be saved
    const folder = req.originalUrl.includes('/products/') 
      ? 'uploads/products' 
      : req.originalUrl.includes('/categories/')
      ? 'uploads/categories'
      : 'uploads/brands';
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    // Set the filename to be the current date and the original file extension
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// File filter for image files
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, and JPG are allowed.'), false);
  }
};

// Multer upload configuration
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // Max size: 5MB
});

module.exports = upload;
