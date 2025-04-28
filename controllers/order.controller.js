const Order = require("../models/orderModel");

// Dummy Data for Orders
let orders = [
  {
    orderId: 1,
    items: [
      { name: "Item 1", quantity: 2, price: 100 },
      { name: "Item 2", quantity: 1, price: 150 },
    ],
    totalAmount: 350,
    payment: "success",
    shippingAddress: "123 Main St, Springfield, IL",
  },
  {
    orderId: 2,
    items: [
      { name: "Item 3", quantity: 3, price: 200 },
      { name: "Item 4", quantity: 2, price: 80 },
    ],
    totalAmount: 760,
    payment: "pending",
    shippingAddress: "456 Oak St, Springfield, IL",
  },
];

function calculateTotalAmount(items) {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
}

exports.getAllOrders = (req, res) => {
  try {
    res.status(200).json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

exports.getOrderById = (req, res) => {
  const orderId = parseInt(req.params.Id);

  const order = orders.find((order) => order.orderId === orderId);

  if (!order) {
    return res.status(404).send({ error: "Order not found" });
  }

  res.status(200).json({ order });
};

exports.createOrder = (req, res) => {
  const { orderId, items, payment, shippingAddress } = req.body;

  const totalAmount = calculateTotalAmount(items);
  const newOrder = {
    orderId,
    items,
    totalAmount,
    payment,
    shippingAddress,
  };

  // Add new order to the orders array
  orders.push(newOrder);

  res.status(201).json({ message: "Order created successfully", newOrder });
};

exports.updateOrder = (req, res) => {
  const orderId = parseInt(req.params.Id);
  const { items, payment, shippingAddress } = req.body;

  const orderIndex = orders.findIndex((order) => order.orderId === orderId);

  if (orderIndex === -1) {
    return res.status(404).send({ error: "Order not found" });
  }
  const totalAmount = calculateTotalAmount(items);

  //appending after spreading
  orders[orderIndex] = {
    ...orders[orderIndex],
    items,
    totalAmount,
    payment,
    shippingAddress,
  };

  res.status(200).json({
    message: "Order updated successfully",
    updatedOrder: orders[orderIndex],
  });
};

exports.deleteOrder = (req, res) => {
  const orderId = parseInt(req.params.Id);

  const orderIndex = orders.findIndex((order) => order.orderId === orderId);

  if (orderIndex === -1) {
    return res.status(404).send({ error: "Order not found" });
  }

  // Remove the order from the orders array
  orders.splice(orderIndex, 1);

  res.status(200).json({ message: "Order deleted successfully" });
};
