const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment.controller");

router.post("/", paymentController.createPayment);

module.exports = router;

/**



if cash -> save payment, confirm, pending
else if card -> use stripe
 */
