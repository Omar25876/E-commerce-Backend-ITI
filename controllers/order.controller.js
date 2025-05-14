const Order = require("../models/orderModel");

function calculateTotalAmount(items) {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
}

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("userId payment");
    res.status(200).json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Get single order by ID
exports.getOrderById = async (req, res) => {
  const orderId = req.params.Id;

  try {
    const order = await Order.findById(orderId).populate("userId payment");

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json({ order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const {
      items,
      payment,
      shippingAddress,
      AfterSale,
      PromoCode,
      DeliveyType,
      Status,
      userId,
    } = req.body;

    // Get the last orderId from the DB and increment it by 1
    const lastOrder = await Order.findOne().sort({ orderId: -1 });
    const newOrderId = lastOrder ? lastOrder.orderId + 1 : 1;

    // Check stock and update product stock
    for (const item of items) {
      const product = await Product.findById(item.Id);

      if (!product) {
        return res.status(404).json({ error: `Product with ID ${item.Id} not found` });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({ error: `Insufficient stock for product: ${product.name}` });
      }

      // Reduce stock
      product.stock -= item.quantity;
      await product.save();
    }

    // Calculate total amount
    const totalAmount = items.reduce((total, item) => total + item.quantity * item.price, 0);

    // Create new order
    const newOrder = await Order.create({
      orderId: newOrderId,
      userId,
      items,
      totalAmount,
      payment,
      shippingAddress,
      AfterSale,
      PromoCode,
      DeliveyType,
      Status,
    });

    res.status(201).json({ message: "Order created successfully", newOrder });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: error.message });
  }
};


// Update an existing order
exports.updateOrder = async (req, res) => {
  const orderId = req.params.Id;

  try {
    const {
      items,
      payment,
      shippingAddress,
      AfterSale,
      PromoCode,
      DeliveyType,
      Status,
    } = req.body;

    const totalAmount = calculateTotalAmount(items);

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      {
        items,
        totalAmount,
        payment,
        shippingAddress,
        AfterSale,
        PromoCode,
        DeliveyType,
        Status,
      },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json({
      message: "Order updated successfully",
      updatedOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
  const orderId = req.params.Id;

  try {
    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
