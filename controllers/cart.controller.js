const {
  addItemToCart,
  getCart,
  removeItemFromCart,
} = require("../services/cartService");

exports.addItem = async (req, res) => {
  const { userId } = req.params;
  const { itemId, quantity, price, name, selectedColor, image, brandId } =
    req.body;
  await addItemToCart(userId, itemId, {
    quantity,
    price,
    name,
    selectedColor,
    image,
    brandId,
  });
  res.json({ success: true });
};

exports.getCart = async (req, res) => {
  const { userId } = req.params;
  const cart = await getCart(userId);
  res.json(cart);
};

exports.removeItem = async (req, res) => {
  const { userId, itemId } = req.params;
  await removeItemFromCart(userId, itemId);
  res.json({ success: true });
};
