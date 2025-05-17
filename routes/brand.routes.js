const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brand.controller');
const permissionMiddleware = require('../middlewares/PermissionMW');

router.get('/', brandController.getAllBrands);
router.get('/:id', brandController.getBrandById);
router.post('/', permissionMiddleware(true), brandController.createBrand);
router.put('/:id', permissionMiddleware(true), brandController.updateBrand);
router.delete('/:id', permissionMiddleware(true), brandController.deleteBrand);
router.get('/products/:brand', permissionMiddleware(true), brandController.getProductsByBrand);

module.exports = router;