const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const statusCode = require("../constant/statusCode");

const Register = async (req, res) => {
  try {
    const { username, email, phone, password, address } = req.body;

    // Validate required fields
    if (!username || username.trim() === "") {
      return res.status(statusCode.badRequest).json({
        message: "Username is required and cannot be empty.",
      });
    }
    if (!email || email.trim() === "") {
      return res.status(statusCode.badRequest).json({
        message: "Email is required and cannot be empty.",
      });
    }

    // Normalize email to lowercase
    const lowerEmail = email.toLowerCase();

    if (!phone || phone.trim() === "") {
      return res.status(statusCode.badRequest).json({
        message: "Phone number is required and cannot be empty.",
      });
    }

    // Check if the email already exists in the database
    const foundUser = await userModel.findOne({ email: lowerEmail });
    if (foundUser) {
      return res.status(statusCode.ok).json({ message: "Already exists, Please log in..." });
    }

    // Password validation regex
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(statusCode.badRequest).json({
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance
    const newUser = new userModel({
      username:username,
      email: lowerEmail,
      phone,
      password: hashedPassword,
      address: address, 
    });

    // Save the new user to the database
    await newUser.save();

    return res.status(statusCode.created).json({ message: "Registered successfully." });
  } catch (error) {
    // Catch any errors and respond with an internal server error
    return res.status(statusCode.internalServerError).json({ error: error.message });
  }
};

module.exports = Register;
