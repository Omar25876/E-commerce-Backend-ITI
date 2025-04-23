const ApiError = require("../utils/errors/ApiError");
const userSchema = require("../utils/validation/userValidation");
const statusCode = require("../constant/statusCode");

async function validationMW(req, res, next) {
  try {
    await userSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return next(new ApiError(error.message, statusCode.badRequest));
  }
}
module.exports = validationMW;
