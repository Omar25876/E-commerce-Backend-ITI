const mongoose = require("mongoose");
const addressSchema = require("./addressModel");

const userSchema = new mongoose.Schema(
  {
    profileImageUrl: {
      type: String,
      required: false,
      default: "",
    },
    firstName: {
      type: String,
      required: [true, "firstName must be entered"],
      minLength: [3, "Name must be more than 3 characters"],
      match: [/^[a-zA-Z]+$/, "FirstName must contain only letters (a-z, A-Z)"],
    },
    lastName: {
      type: String,
      required: [true, "lastName must be entered"],
      minLength: [3, "Name must be more than 3 characters"],
      match: [/^[a-zA-Z]+$/, "LastName must contain only letters (a-z, A-Z)"],
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
      match: [
        /^\+?[0-9]{11}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email must be like example@example.com",
      ],
    },
    phone: {
      type: String,
      unique: true,
      sparse: true,
      match: [
        /^(010|011|012|015)\d{8}$/,
        "Phone must be 11 numbers and start with 010, 011, 012, or 015",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [8, "Password should be at least 8 characters"],
    },
    address: addressSchema,
    gender: {
      type: String,
      enum: ["male", "female"],
      required: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    paymentCards: [
      {
        cardNumber: { type: String, required: false, default: "" },
        cardHolderName: { type: String, required: false, default: "" },
        expiryDate: { type: String, required: false, default: "" },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
