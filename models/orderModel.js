const mongoose = require("mongoose");
const Payment = require("./paymentModel");
const Address = require("./addressModel");
const UserId = require("./userModel");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: UserId.modelName,
      required: [true, "UserId is required"],
    },
    orderId: {
      type: Number,
      required: true,
    },
    items: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Payment.modelName, 
      required: true,
    },
    shippingAddress:Address,
    paymentMethod: {
      type: String,
      enum: ["stripe", "cash"],
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered"],
      default: "pending",
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
