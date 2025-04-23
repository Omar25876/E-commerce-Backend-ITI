const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { message } = require("../utils/validation/userValidation");
const ApiError = require("../utils/errors/ApiError");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
const statusCode = require("../constant/statusCode");


function verifyToken(req, res, next) {
  const token = req.header("authorization")?.split(" ")[1];
  if (!token) {
    return next(new ApiError("Access Denied:No Token provided", statusCode.unauthorized));
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return next(new ApiError("token is invalid", statusCode.forbidden));
    
  }
}
module.exports = verifyToken;
