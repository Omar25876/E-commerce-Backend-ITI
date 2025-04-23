const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const statusCode = require("../constant/statusCode");

const LogIn = async (req, res) => {
  try {
    const { email, phone, password } = req.body;
    console.log("Input:", email, phone, password); // ✅ log input

    if (!password || (!email && !phone)) {
      return res.status(statusCode.badRequest).json({
        message: "Please provide email or phone and password",
      });
    }

    let foundUser = null;
    if (email) {
      foundUser = await userModel.findOne({ email: email.toLowerCase() });
    } else if (phone) {
      foundUser = await userModel.findOne({ phone });
    }

    console.log("Found User:", foundUser); // ✅ log user

    if (!foundUser) {
      return res.status(statusCode.badRequest).json({
        message: "Invalid email/phone or password",
      });
    }

    const passTrue = await bcrypt.compare(password, foundUser.password);
    console.log("Password Match:", passTrue); // ✅ log password check

    if (!passTrue) {
      return res.status(statusCode.badRequest).json({
        message: "Invalid email/phone or password",
      });
    }

    const dataJWT = await jwt.sign(
      { id: foundUser._id, email: foundUser.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION }
    );

    return res.status(statusCode.ok).json({
      message: "Logged in successfully.",
      token: dataJWT,
      user: {
        username: foundUser.username,
        email: foundUser.email,
        address: foundUser.address,
        phone: foundUser.phone,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(statusCode.internalServerError).json({
      error: error.message,
    });
  }
};


module.exports = LogIn;
