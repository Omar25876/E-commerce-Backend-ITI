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
      id:user._id,
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
      paymentCards, // Expecting an array or JSON string
    } = req.body;

    // Upload image to GitHub if provided
    let profileImageUrl;
    if (req.file) {
      const folderPath = `profile_images/${userId}`;
      profileImageUrl = await uploadImageToGitHub(req.file, folderPath);
    }

    // Get the existing user
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(statusCode.notFound).json({ message: "User not found." });
    }

    // Parse incoming cards
    const incomingCards = Array.isArray(paymentCards)
      ? paymentCards
      : JSON.parse(paymentCards || "[]");

    const updatedCardMap = new Map();

    // 1. Add existing cards to map by id
    user.paymentCards.forEach((card) => {
      updatedCardMap.set(String(card._id), card.toObject());
    });

    // 2. Handle incoming cards
    const newCardsToAdd = [];

    incomingCards.forEach((card) => {
      if (card.id && updatedCardMap.has(card.id)) {
        // Update existing card
        const existing = updatedCardMap.get(card.id);
        updatedCardMap.set(card.id, { ...existing, ...card });
      } else {
        // New card to add on top
        newCardsToAdd.push(card);
      }
    });

    // Final merged list: new cards first, then updated existing
    const mergedCards = [...newCardsToAdd, ...Array.from(updatedCardMap.values())];

    // Prepare updated fields
    const updatedData = {
      ...(firstName !== undefined && { firstName }),
      ...(lastName !== undefined && { lastName }),
      ...(email !== undefined && { email }),
      ...(phone !== undefined && { phone }),
      ...(address !== undefined && { address }),
      ...(gender !== undefined && { gender }),
      ...(profileImageUrl && { profileImageUrl }),
      ...(paymentCards !== undefined && { paymentCards: mergedCards }),
    };

    // Update the user
    const updatedUser = await userModel
      .findByIdAndUpdate(userId, updatedData, { new: true })
      .select("-password");

    const formattedProfile = {
      id:updatedUser._id,
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
      paymentCards: updatedUser.paymentCards.map((card) => ({
        id: card._id,
        cardHolderName: card.cardHolderName,
        cardNumber: card.cardNumber,
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

 
// const deletePaymentCard = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const cardId = req.params.cardId;

//     const user = await userModel.findById(userId);
//     if (!user) {
//       return res.status(statusCode.notFound).json({ message: "User not found." });
//     }

//     const initialLength = user.paymentCards.length;
//     user.paymentCards = user.paymentCards.filter(
//       (card) => String(card._id) !== String(cardId)
//     );

//     if (user.paymentCards.length === initialLength) {
//       return res.status(statusCode.notFound).json({ message: "Card not found." });
//     }

//     await user.save();

//     return res.status(statusCode.ok).json({ message: "Payment card deleted successfully." });
//   } catch (error) {
//     console.error(error);
//     return res.status(statusCode.internalServerError).json({ error: error.message });
//   }
// };

const deletePaymentCard = async (req, res) => {
  try {
    const userId = req.user.id;
    const cardId = req.params.cardId;

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(statusCode.notFound).json({ message: "User not found." });
    }

    const initialLength = user.paymentCards.length;
    user.paymentCards = user.paymentCards.filter(
      (card) => String(card._id) !== String(cardId)
    );

    if (user.paymentCards.length === initialLength) {
      return res.status(statusCode.notFound).json({ message: "Card not found." });
    }

    // Save without validating other fields
    await user.save({ validateBeforeSave: false });

    return res.status(statusCode.ok).json({ message: "Payment card deleted successfully." });
  } catch (error) {
    console.error(error);
    return res.status(statusCode.internalServerError).json({ error: error.message });
  }
};


/**
 * GET /api/v1/users               (query: ?page=&size=)
 * Returns paginated list of all users (password stripped out).
 * Defaults → page 1, size 10.
 */
const allUsers = async (req, res) => {
  try {
    // pagination params with safe fall-backs
    const page = Math.max(parseInt(req.query.page) || 1, 1);
    const size = Math.max(parseInt(req.query.size) || 10, 1);
    const skip = (page - 1) * size;

    const [users, total] = await Promise.all([
      userModel
        .find()                       // all docs
        .select("-password")          // never expose hashed pw
        .skip(skip)
        .limit(size),
      userModel.countDocuments()
    ]);

    return res.status(statusCode.ok).json({
      page,
      size,
      totalPages: Math.ceil(total / size),
      totalUsers: total,
      users,
    });
  } catch (err) {
    console.error(err);
    res
      .status(statusCode.internalServerError)
      .json({ error: err.message });
  }
};

/**
 * GET /api/v1/users/:id            (param :id = user id)
 * Returns the complete account for a single user
 */
const getAccount = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userModel
      .findById(id)
      .select("-password");          // hide password

    if (!user)
      return res
        .status(statusCode.notFound)
        .json({ message: "User not found." });

    return res.status(statusCode.ok).json({ user });
  } catch (err) {
    console.error(err);
    res
      .status(statusCode.internalServerError)
      .json({ error: err.message });
  }
};


module.exports = {
  getProfile,
  updateProfile,
  deleteAccount,
  deletePaymentCard,
  allUsers,
  getAccount,
};
