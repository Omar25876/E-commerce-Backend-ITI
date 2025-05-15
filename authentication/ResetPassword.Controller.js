const bcrypt = require("bcryptjs");

const resetPassword = async (req, res) => {
  const { code, newPassword } = req.body;

  if (!code || !newPassword) {
    return res.status(statusCode.badRequest).json({
      message: "Code and new password are required",
    });
  }

  const user = await userModel.findOne({
    resetCode: code,
    resetCodeExpires: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(statusCode.badRequest).json({
      message: "Invalid or expired reset code",
    });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  user.resetCode = undefined;
  user.resetCodeExpires = undefined;

  await user.save();

  return res.status(statusCode.ok).json({
    message: "Password reset successfully",
  });
};

module.exports = resetPassword;
