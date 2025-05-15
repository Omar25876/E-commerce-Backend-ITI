const resetPassword = require("./ResetPassword.Controller");
const router = require("express").Router();

router.post("/", resetPassword);

module.exports = router;

