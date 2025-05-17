const Payment = require("../models/paymentModel");
const Order = require("../models/orderModel"); // You forgot to import Order!
const { createPaymentIntent } = require("../services/stripe");

exports.createPayment = async (req, res) => {
  try {
    const { amount, paymentMethod, orderItems, shippingAddress } = req.body; // you forgot orderItems, shippingAddress in body destructuring

    let paymentIntentId = "";
    let clientSecret = "";
    let currency = "usd";
    let paymentAmount = Math.round(amount * 100);

    if (paymentMethod === "stripe") {
      const paymentIntent = await createPaymentIntent({
        amount: paymentAmount,
        currency,
        payment_method_types: ["card"],
      });

      paymentIntentId = paymentIntent.id;
      clientSecret = paymentIntent.client_secret;
    } else if (paymentMethod === "cash") {
      paymentIntentId = "cash";
      clientSecret = "";
    } else {
      return res.status(400).json({ error: "Invalid payment method." });
    }

    // Create Payment
    const payment = new Payment({
      amount: paymentAmount,
      currency,
      paymentIntentId,
      status: "pending",
    });

    const savedPayment = await payment.save();

    // Create Order
    const items = orderItems.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    }));

    const order = new Order({
      userId: req.user._id,
      items,
      payment: savedPayment._id,
      totalAmount: savedPayment.amount,
      status: "pending",
      shippingAddress,
      paymentMethod,
      paymentStatus: "pending",
    });

    const savedOrder = await order.save();

    // Single response
    return res.status(200).json({
      order: savedOrder,
      paymentMethod: savedOrder.paymentMethod,
      paymentIntentID: paymentIntentId,
      paymentStatus: "pending",
      clientSecret,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
