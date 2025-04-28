/// Unit Of Work
module.exports = {
  login: require("../authentication/Login.Route"),
  register: require("../authentication/Register.Route"),
  //forgetPassword: require("../authentication/forgetPassword.Route"),
  product: require("../routes/product.routes"),
  category: require("../routes/category.routes"),
  brand: require("../routes/brand.routes"),
  account: require("../routes/account.routes"),

  // forgetPassword: require("../authentication/forgetPassword.Route"),
  paymentRoute : require("../services/paymentRoute")

};
