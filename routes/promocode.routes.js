const express = require('express');
const router = express.Router();
const promoController = require('../controllers/promocode.controller');

router.post('/', promoController.createPromoCode);
router.get('/', promoController.getAllPromoCodes);
router.post('/validate', promoController.validatePromoCode);
router.delete('/:id', promoController.deletePromoCode);

module.exports = router;


