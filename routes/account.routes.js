const express = require("express");
const router = express.Router();
const { getProfile, updateProfile, deleteAccount,deletePaymentCard, allUsers, getAccount } = require("../controllers/account.controller");
const { authenticateToken } = require("../middlewares/authMiddleware");
const multer = require("multer");

// 🧠 Multer setup to handle file upload in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/", authenticateToken, getProfile);

// 🔽 Upload single image file as 'profileImage'
router.put("/", authenticateToken, upload.single("profileImage"), updateProfile);

router.delete("/profile", authenticateToken, deleteAccount);

router.delete("/payment-card/:cardId", authenticateToken, deletePaymentCard);

router.get("/users", authenticateToken, allUsers);   
router.get("/users/:id", authenticateToken,  getAccount); 

module.exports = router;
