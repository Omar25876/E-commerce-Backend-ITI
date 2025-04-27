const jwt = require("jsonwebtoken");
const User = require('../models/userModel');

const authenticateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; 
      if (!token) {
        return res.status(403).json({ message: 'Access Denied: No token provided.' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(403).json({ message: 'Access Denied: User not found.' });
      }

      req.user = user;
      next();
  } catch (error) {
    return res.status(400).json({
      message: "Invalid token.",
    });
  }
};

module.exports = { authenticateToken };
