const PromoCode = require('../models/promocodeModel');

// Create promo code
exports.createPromoCode = async (req, res) => {
  try {
    const newPromo = await PromoCode.create(req.body);
    res.status(201).json(newPromo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all promo codes
exports.getAllPromoCodes = async (req, res) => {
  try {
    const promos = await PromoCode.find();
    res.json(promos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Validate promo code
exports.validatePromoCode = async (req, res) => {
  const { code } = req.body;
  try {
    const promo = await PromoCode.findOne({ code, isActive: true });

    if (!promo) {
      return res.status(404).json({ message: 'Invalid or expired promo code' });
    }

    if (promo.expiryDate < new Date()) {
      return res.status(400).json({ message: 'Promo code has expired' });
    }

    if (promo.usageLimit <= promo.usedCount) {
      return res.status(400).json({ message: 'Promo code usage limit reached' });
    }

    promo.usedCount += 1;
    await promo.save();

    res.json({ message: 'Promo code applied', discount: promo.discountValue, type: promo.discountType });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete promo code
exports.deletePromoCode = async (req, res) => {
  try {
    await PromoCode.findByIdAndDelete(req.params.id);
    res.json({ message: 'Promo code deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
