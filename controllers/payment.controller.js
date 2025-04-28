const Payment = require("../models/paymentModel");
const { createPaymentIntent } = require("../services/stripe");

exports.createPayment = async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const paymentIntent = await createPaymentIntent(amount, currency);

    const payment = new Payment({
      amount,
      currency,
      paymentIntentId: paymentIntent.id,
      status: "pending",
    });

    await payment.save();

    res.send({
      clientSecret: paymentIntent.client_secret,
      paymentIntentID: paymentIntent.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
