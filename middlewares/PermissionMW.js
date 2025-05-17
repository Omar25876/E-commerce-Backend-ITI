const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const permissionMiddleware = (requireAdmin) => {
  return async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(' ')[1]; // Token in header
      if (!token) {
        return res.status(403).json({ message: 'Access Denied: No token provided.' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(403).json({ message: 'Access Denied: User not found.' });
      }

      if (requireAdmin && user.isAdmin !== true) {
        return res.status(403).json({ message: 'Permission Denied: Admins only.' });
      }

      req.user = user;
      next();
    } catch (err) {
      console.error('Permission Middleware Error:', err.message);
      return res.status(403).json({ message: 'Access Denied: Invalid token.' });
    }
  };
};

module.exports = permissionMiddleware;
