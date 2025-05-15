const express = require("express");
const router = express.Router();
const googleLogin = require("../authentication/GoogleLogin.Controller");

router.post("/", googleLogin);

module.exports = router;
