const express = require("express");
const router = express.Router();
const {allUsers, getAccount } = require("../controllers/admin.controller");
const { authenticateToken } = require("../middlewares/authMiddleware");

router.get("/", authenticateToken, allUsers);   
router.get("/:id", authenticateToken,  getAccount); 

module.exports = router;
