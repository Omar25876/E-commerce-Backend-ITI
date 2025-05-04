const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const statusCode = require("../constant/statusCode");
const moment = require("moment");

const LogIn = async (req, res) => {
  try {
    const { email, phone, password } = req.body;

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

    if (!foundUser) {
      return res.status(statusCode.badRequest).json({
        message: "Invalid email/phone or password",
      });
    }

    const passTrue = await bcrypt.compare(password, foundUser.password);
 
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
        _id: foundUser._id,
        profileImageUrl: foundUser.profileImageUrl,
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        email: foundUser.email,
        address: foundUser.address,
        phone: foundUser.phone,
        gender: foundUser.gender,
        isAdmin: foundUser.isAdmin,
        createdAt: moment(foundUser.createdAt).format("YYYY-MM-DD hh:mm A"), 
        updatedAt: moment(foundUser.updatedAt).format("YYYY-MM-DD hh:mm A"),
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
