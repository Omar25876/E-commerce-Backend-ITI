const Order = require("../models/orderModel");
const Product = require("../models/productModel")
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

// Get all orders for a specific user
exports.getOrdersForSpecificUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const userOrders = await Order.find({ userId })
      .populate("userId payment")
      .sort({ createdAt: -1 }); // Optional: Sort by latest orders

    if (!userOrders || userOrders.length === 0) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    res.status(200).json({ orders: userOrders });
  } catch (error) {
    console.error("Error fetching user's orders:", error);
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
      paymentMethod,
    } = req.body;

    // Get the last orderId from the DB and increment it by 1
    const lastOrder = await Order.findOne().sort({ orderId: -1 });
    const newOrderId = lastOrder ? lastOrder.orderId + 1 : 1;

    // Check stock and update product stock
    for (const item of items) {
      const product = await Product.findById(item._id);

      if (!product) {
        return res.status(404).json({ error: `Product with ID ${item._id} not found` });
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
      paymentMethod
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
    // Build the update object dynamically
    const updateData = {};

    if ('items' in req.body) {
      updateData.items = req.body.items;
      // Calculate totalAmount only if items are provided
      updateData.totalAmount = calculateTotalAmount(req.body.items);
    }

    if ('payment' in req.body) updateData.payment = req.body.payment;
    if ('shippingAddress' in req.body) updateData.shippingAddress = req.body.shippingAddress;
    if ('AfterSale' in req.body) updateData.AfterSale = req.body.AfterSale;
    if ('PromoCode' in req.body) updateData.PromoCode = req.body.PromoCode;
    if ('DeliveyType' in req.body) updateData.DeliveyType = req.body.DeliveyType;
    if ('Status' in req.body) updateData.Status = req.body.Status;

    // If no fields were sent, respond with bad request
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ error: "No valid fields provided to update" });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      updateData,
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
