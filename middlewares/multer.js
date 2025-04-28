// middleware/multer.js

const multer = require('multer');

// Set up multer storage options (in-memory storage in this case)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Export multer middleware for use in routes
module.exports = upload;
