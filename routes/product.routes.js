const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerConfig'); 
const productController = require('../controllers/product.controller');


router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', upload.array('images'), productController.createProduct); 
router.put('/:id', upload.array('images'), productController.updateProduct); 
router.delete('/:id', productController.deleteProduct);

module.exports = router;
