const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const permissionMiddleware = require('../middlewares/PermissionMW');

router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.post('/', permissionMiddleware(true), categoryController.createCategory);
router.put('/:id', permissionMiddleware(true), categoryController.updateCategory);
router.delete('/:id',permissionMiddleware(true), categoryController.deleteCategory);
router.get('/products/:category', categoryController.getProductsByCategory);

module.exports = router;