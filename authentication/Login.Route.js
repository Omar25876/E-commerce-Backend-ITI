const login = require("./LogIn.Controller");
const router = require("express").Router();

router.post("/", login);

module.exports = router;


// Compare this snippet from authentication/Login.Controller.js: