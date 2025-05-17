const express = require('express');
const router = express.Router();
const { uploadImage, uploadMiddleware } = require('../controllers/uploadImage.controller');

// Route: POST /api/upload?folderPath=products/InEar/JBL/Jr310
router.post('/image', uploadMiddleware, uploadImage);

module.exports = router;
