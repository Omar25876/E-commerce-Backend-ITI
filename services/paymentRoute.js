const express = require("express");
const router = express.Router();
const { createPaymentIntent } = require("./stripe");

// POST /api/payments/create-payment-intent
router.post("/create-payment-intent", async (req, res) => {
  console.log("Received request body:", req.body);
  try {
    const { amount, currency } = req.body; // get amount and currency from request body

    const paymentIntent = await createPaymentIntent(amount, currency);

    res.send({
      clientSecret: paymentIntent.client_secret, // send back client secret to frontend
      paymentIntentID: paymentIntent.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;

/**
 * orders:
 * order has {userId, items{name, quantity, price}, totalAmount, payment{amount - number 
Currency - string 
PaymentIntendId string
Status - string enum(success - faild - pendung)
},
shipping info(Address),
orderStatus(pending, confirmed, success)
createdAt
}
 * 
 */
