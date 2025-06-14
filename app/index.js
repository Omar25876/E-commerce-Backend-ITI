const express = require("express");
const cors = require("cors");
const app = express();
const routers = require("../routes");
const statusCode = require("../constant/statusCode");
const bodyParser = require("body-parser");
const { connectRedis } = require("../services/redisClient");


(async () => {
  try {
    await connectRedis();
  } catch (err) {}
})();

// Omar
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/register", routers.register);
app.use("/api/login", routers.login);
app.use("/api/auth/google",routers.googleLogin);
app.use("/api/upload", routers.uploadImage);
app.use("/api/products", routers.product);
app.use("/api/category", routers.category);
app.use("/api/brand", routers.brand);
app.use("/api/profile", routers.account);
app.use("/api/payment", routers.payment);
app.use("/api/orders", routers.order);
app.use("/api/cart", routers.cart);
app.use('/api/promocode', routers.promocode);
app.use('/api/resetPassword', routers.resetPassword);
app.use('/api/forgetPassword', routers.forgotPassword);
app.use('/api/users', routers.admin);

app.use((err, req, res, next) => {
  return res
    .status(err.statusCode || statusCode.internalServerError)
    .json({ error: err.message });
});

module.exports = app;
