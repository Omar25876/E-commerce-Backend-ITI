/// Unit Of Work
module.exports = {
  login: require("../authentication/Login.Route"),
  register: require("../authentication/Register.Route"),
  product: require("../routes/product.routes"),
  category: require("../routes/category.routes"),
  brand: require("../routes/brand.routes"),
  account: require("../routes/account.routes"),
  payment: require("../routes/payment.routes"),
  order: require("../routes/order.routes"),
  uploadImage: require("../routes/uploadImage.routes"),
  cart: require("../routes/cart.routes"),
  promocode:require('./promocode.routes'),
};
