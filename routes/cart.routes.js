const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller");

// Add item
router.post("/:userId/items", cartController.addItem);
// Get cart
router.get("/:userId", cartController.getCart);
// Remove item
router.delete("/:userId/items/:itemId", cartController.removeItem);

module.exports = router;
