const express = require("express");
const router = express.Router();
const { getProfile, updateProfile, deleteAccount } = require("../controllers/account.controller");
const { authenticateToken } = require("../middlewares/authMiddleware"); 


router.get("/", authenticateToken, getProfile);

router.put("/", authenticateToken, updateProfile);

router.delete("/profile", authenticateToken, deleteAccount);
module.exports = router;
