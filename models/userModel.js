const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username must be entered"],
    minLength: [3, "name must be more than 3 characters"],
    match: [/^[a-zA-Z]+$/, "Username must contain only letters (a-z, A-Z)"],
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
    match: [
      /^\+?[0-9]{11}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "email must be as example@example.com",
    ],
  },
  phone: {
    type: String,
    unique: true,
    sparse: true,
    match: [
      /^(010|011|012|015)\d{8}$/,
      "phone must be 11 number and start with 011,012,010,015",
    ],
  },
  password: {
    type: String,
    required: [true, , "Password is required"],
    minLength: [8, "password should of minimum length 8"],
 },

  address : {
    type: String,
    required: false,
  },
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
