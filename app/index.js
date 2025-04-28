const express = require("express");
const cors = require("cors");
const app = express();
const routers = require("../routes");
const statusCode = require("../constant/statusCode");


<<<<<<< Updated upstream
=======
app.use(cors());

>>>>>>> Stashed changes
app.use(express.json());
app.use("/api/register", routers.register);
app.use("/api/login", routers.login);
//app.use("/api/forgetPassword", routers.forgetPassword);
// app.use("/api/resetPasswordWithPhone", routers.forgetPassword);
// app.use("/api/resetPasswordWithEmail", routers.forgetPassword);
<<<<<<< Updated upstream
app.use("/api/products", routers.product);
app.use("/api/category", routers.category);
app.use("/api/brand", routers.brand);
app.use("/api/profile", routers.account);
=======
app.use("/api/payments", routers.paymentRoute);
>>>>>>> Stashed changes

app.use((err, req, res, next) => {
  return res
    .status(err.statusCode || statusCode.internalServerError)
    .json({ error: err.message });
});

module.exports = app;
