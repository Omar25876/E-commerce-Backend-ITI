const { client } = require("./redisClient");

const getCartKey = (userId) => `cart:${userId}`;

async function addItemToCart(userId, itemId, itemData) {
  // get item data from Redis if exists
  const existingItem = await client.hGet(getCartKey(userId), itemId);
  if (existingItem) itemData.quantity += JSON.parse(existingItem).quantity; // update the quantity
  await client.hSet(getCartKey(userId), itemId, JSON.stringify(itemData));
  await client.expire(getCartKey(userId), 2592000); // 1 month TTL
}

// Get entire cart of user if exists
async function getCart(userId) {
  const cartData = await client.hGetAll(getCartKey(userId));
  // Convert stringified JSON back to objects
  return Object.entries(cartData).map(([id, item]) => ({
    itemId: id,
    ...JSON.parse(item),
  }));
}

// Remove item from user cart
async function removeItemFromCart(userId, itemId) {
  await client.hDel(getCartKey(userId), itemId);
}

module.exports = {
  addItemToCart,
  getCart,
  removeItemFromCart,
};
