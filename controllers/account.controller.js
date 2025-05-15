const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const moment = require("moment");
const statusCode = require("../constant/statusCode");
const { uploadImageToGitHub } = require("../github");

// GET Profile Data
const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await userModel.findById(userId).select("-password");

    if (!user) {
      return res.status(statusCode.notFound).json({ message: "User not found." });
    }

    const formattedProfile = {
      profileImageUrl: user.profileImageUrl,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      phone: user.phone,
      gender: user.gender,
      isAdmin: user.isAdmin,
      createdAt: moment(user.createdAt).format("YYYY-MM-DD hh:mm A"),
      updatedAt: moment(user.updatedAt).format("YYYY-MM-DD hh:mm A"),
      paymentCards: user.paymentCards.map(card => ({
        id: card._id,
        cardHolderName: card.cardHolderName,
        cardNumber: card.cardNumber,
        cvv: card.cvv,
        expiryDate: card.expiryDate,
      })),
    };

    return res.status(statusCode.ok).json({ user: formattedProfile });
  } catch (error) {
    console.error(error);
    return res.status(statusCode.internalServerError).json({ error: error.message });
  }
};

// UPDATE Profile Data
const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      gender,
      paymentCards,
    } = req.body;

    let profileImageUrl;

    // 🔽 Handle image upload to GitHub
    if (req.file) {
      const folderPath = `profile_images/${userId}`;
      profileImageUrl = await uploadImageToGitHub(req.file, folderPath);
    }

    // 🔽 Prepare update data
    const updatedData = {
      firstName,
      lastName,
      email,
      phone,
      address,
      gender,
      ...(profileImageUrl && { profileImageUrl }),
      ...(paymentCards && { paymentCards: JSON.parse(paymentCards) }),
    };

    const updatedUser = await userModel.findByIdAndUpdate(userId, updatedData, { new: true }).select("-password");

    if (!updatedUser) {
      return res.status(statusCode.notFound).json({ message: "User not found." });
    }

    const formattedProfile = {
      profileImageUrl: updatedUser.profileImageUrl,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      address: updatedUser.address,
      phone: updatedUser.phone,
      gender: updatedUser.gender,
      isAdmin: updatedUser.isAdmin,
      createdAt: moment(updatedUser.createdAt).format("YYYY-MM-DD hh:mm A"),
      updatedAt: moment(updatedUser.updatedAt).format("YYYY-MM-DD hh:mm A"),
      paymentCards: updatedUser.paymentCards.map(card => ({
        cardNumber: card.cardNumber,
        cardHolderName: card.cardHolderName,
        cvv: card.cvv,
        expiryDate: card.expiryDate,
      })),
    };

    return res.status(statusCode.ok).json({
      message: "Profile updated successfully.",
      user: formattedProfile,
    });
  } catch (error) {
    console.error(error);
    return res.status(statusCode.internalServerError).json({ error: error.message });
  }
};

// DELETE Account
const deleteAccount = async (req, res) => {
  try {
    const userId = req.user.id;
    const deletedUser = await userModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(statusCode.notFound).json({ message: "User not found, unable to delete account." });
    }

    return res.status(statusCode.ok).json({ message: "Account deleted successfully." });
  } catch (error) {
    console.error(error);
    return res.status(statusCode.internalServerError).json({ error: error.message });
  }
};

module.exports = {
  getProfile,
  updateProfile,
  deleteAccount,
};
