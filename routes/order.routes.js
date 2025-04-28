const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");

router.get("/", orderController.getAllOrders);
router.get("/:Id", orderController.getOrderById);
router.post("/", orderController.createOrder);
router.put("/:Id", orderController.updateOrder);
router.delete("/:Id", orderController.deleteOrder);

module.exports = router;
