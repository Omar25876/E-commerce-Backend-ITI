const userModel = require("../models/userModel");
const nodemailer = require("nodemailer");
const twilio = require("twilio");
const statusCode = require("../constant/statusCode");

// Twilio client
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Generate 6-digit code
const generateCode = () => Math.floor(100000 + Math.random() * 900000).toString();

const forgotPassword = async (req, res) => {
  const { email, phone } = req.body;

  if (!email && !phone) {
    return res.status(statusCode.badRequest).json({
      message: "Please provide email or phone",
    });
  }

  let user = null;
  if (email) {
    user = await userModel.findOne({ email });
  } else if (phone) {
    user = await userModel.findOne({ phone });
  }

  if (!user) {
    return res.status(statusCode.notFound).json({
      message: "User not found",
    });
  }

  const resetCode = generateCode();
  const expiresIn = new Date(Date.now() + 15 * 60 * 1000);

  user.resetCode = resetCode;
  user.resetCodeExpires = expiresIn;
  await user.save();

  if (email) {
    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Password Reset Code",
      text: `Your password reset code is: ${resetCode}`,
    };

    await transporter.sendMail(mailOptions);
  }

  if (phone) {
    await twilioClient.messages.create({
      body: `Your password reset code is: ${resetCode}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: `+2${phone}`, 
    });
  }

  return res.status(statusCode.ok).json({
    message: "Reset code sent successfully",
  });
};

module.exports = forgotPassword;
