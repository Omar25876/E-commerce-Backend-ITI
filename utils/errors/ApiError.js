const statusCodes = require("../../constant/statusCode");

class ApiError extends Error {
  constructor(message, _statusCode) {
    super(message);
    this.statusCode = _statusCode || statusCodes.internalServerError;
  }
}
module.exports = ApiError;
