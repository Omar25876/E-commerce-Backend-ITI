const forgotPassword = require("./ForgotPassword.Controller");
const router = require("express").Router();

router.post("/", forgotPassword);

module.exports = router;

