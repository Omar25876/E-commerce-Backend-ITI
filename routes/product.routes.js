const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authenticateToken } = require("../middlewares/authMiddleware"); 


router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', authenticateToken,productController.createProduct);
router.put('/:id', authenticateToken, productController.updateProduct);
router.delete('/:id', authenticateToken, productController.deleteProduct);

router.post('/:id/reviews', authenticateToken, productController.addReview);

module.exports = router;
