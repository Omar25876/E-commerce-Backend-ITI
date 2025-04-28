const express = require("express");
const cors = require("cors");
const app = express();
const routers = require("../routes");
const statusCode = require("../constant/statusCode");
// Omar
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
app.use("/api/payment", routers.payment);
app.use("/api/order", routers.order);

app.use((err, req, res, next) => {
  return res
    .status(err.statusCode || statusCode.internalServerError)
    .json({ error: err.message });
});

module.exports = app;
