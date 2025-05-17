const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const statusCode = require("../constant/statusCode");

const Register = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password, address, isAdmin, gender, profileImageUrl } = req.body;

    // Validate required fields

    if (!firstName || firstName.trim() === "") {
      return res.status(statusCode.badRequest).json({
        message: "First name is required and cannot be empty.",
      });
    }

    if (!lastName || lastName.trim() === "") {
      return res.status(statusCode.badRequest).json({
        message: "Last name is required and cannot be empty.",
      });
    }

    if (!email || email.trim() === "") {
      return res.status(statusCode.badRequest).json({
        message: "Email is required and cannot be empty.",
      });
    }
    const normalizedGender = gender.toLowerCase();
    if (normalizedGender !== "male" && normalizedGender !== "female") {
      return res.status(statusCode.badRequest).json({
        message: "Gender must be either 'male' or 'female'.",
      });
    }
    
    if (!gender || gender.trim() === "") {
      return res.status(statusCode.badRequest).json({
        message: "Gender is required and cannot be empty.",
      });
    }
    

    
    const lowerEmail = email.toLowerCase();

    if (!phone || phone.trim() === "") {
      return res.status(statusCode.badRequest).json({
        message: "Phone number is required and cannot be empty.",
      });
    }

    if (!password || password.trim() === "") {
      return res.status(statusCode.badRequest).json({
        message: "Password is required and cannot be empty.",
      });
    }

    const foundUser = await userModel.findOne({ email: lowerEmail });
    if (foundUser) {
      return res.status(statusCode.ok).json({ message: "Already exists, Please log in..." });
    }

    const foundPhone = await userModel.findOne({ phone: phone });
    if (foundPhone) {
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

    const userAddress = {
      city: address?.city || "",
      street: address?.street || "",
      buildingNumber: address?.buildingNumber || "",
      apartmentNumber: address?.apartmentNumber || ""
    };
    
    // Create a new user instance
    const newUser = new userModel({
       profileImageUrl: profileImageUrl || "",
      firstName,
      lastName,
      email: lowerEmail,
      phone,
      password: hashedPassword,
      address: userAddress, 
      gender:normalizedGender,
      isAdmin: isAdmin || false
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
