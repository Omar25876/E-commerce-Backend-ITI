const userModel = require("../models/userModel");
const statusCode = require("../constant/statusCode");


/**
 * GET /api/v1/users               (query: ?page=&size=)
 * Returns paginated list of all users (password stripped out).
 * Defaults → page 1, size 10.
 */
const allUsers = async (req, res) => {
  try {
    // pagination params with safe fall-backs
    const page = Math.max(parseInt(req.query.page) || 1, 1);
    const size = Math.max(parseInt(req.query.size) || 10, 1);
    const skip = (page - 1) * size;

    const [users, total] = await Promise.all([
      userModel
        .find()                     
        .select("-password")          
        .skip(skip)
        .limit(size),
      userModel.countDocuments()
    ]);

    return res.status(statusCode.ok).json({
      page,
      size,
      totalPages: Math.ceil(total / size),
      totalUsers: total,
      users,
    });
  } catch (err) {
    console.error(err);
    res
      .status(statusCode.internalServerError)
      .json({ error: err.message });
  }
};

/**
 * GET /users/:id            (param :id = user id)
 * Returns the complete account for a single user
 */
const getAccount = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userModel
      .findById(id)
      .select("-password");          // hide password

    if (!user)
      return res
        .status(statusCode.notFound)
        .json({ message: "User not found." });

    return res.status(statusCode.ok).json({ user });
  } catch (err) {
    console.error(err);
    res
      .status(statusCode.internalServerError)
      .json({ error: err.message });
  }
};


module.exports = {
  allUsers,
  getAccount,
};
