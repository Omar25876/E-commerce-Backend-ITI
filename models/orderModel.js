const mongoose = require("mongoose");
const Payment = require("./paymentModel");
const Address = require("./addressModel");
const UserId = require("./userModel");

const itemSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  Brand: { type: String, required: true },
  Image: { type: String, required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  SelectedColor: { type: String, required: false }, 
});

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
    Status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered"],
      default: "pending",
    },
    DeliveyType: {
      type: String,
      required: false,
    },
    items: [itemSchema],
    totalAmount: {
      type: Number,
      required: true,
    },
    AfterSale: {
      type: Number,
      required: false,
    },
    PromoCode: {
      type: String,
      required: false,
    },
    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Payment.modelName,
      required: false,
    },
    shippingAddress: Address,
    paymentMethod: {
      type: String,
      enum: ["stripe", "cash"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
