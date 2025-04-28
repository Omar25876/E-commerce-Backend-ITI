const express = require("express");
const cors = require("cors");
const app = express();
const routers = require("../routes");
const statusCode = require("../constant/statusCode");
const bodyParser = require("body-parser");
const multer = require("multer");
// Set up multer storage options (in-memory storage in this case)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 

app.use(express.json());
app.use("/api/register", routers.register);
app.use("/api/login", routers.login);
//app.use("/api/forgetPassword", routers.forgetPassword);
// app.use("/api/resetPasswordWithPhone", routers.forgetPassword);
// app.use("/api/resetPasswordWithEmail", routers.forgetPassword);
app.use("/api/products", routers.product);
app.use("/api/category", routers.category);
app.use("/api/brand", routers.brand);
app.use("/api/profile", routers.account);

app.use((err, req, res, next) => {
  return res.status(err.statusCode || statusCode.internalServerError).json({ error: err.message });
});

module.exports = app;
