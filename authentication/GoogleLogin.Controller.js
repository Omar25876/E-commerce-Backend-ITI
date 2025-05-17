const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const statusCode = require('../constant/statusCode');
const moment = require('moment');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleLogin = async (req, res) => {
  try {
    const { tokenId } = req.body;

    if (!tokenId) {
      return res.status(statusCode.badRequest).json({ message: "No token provided" });
    }

    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const { email, given_name, family_name, picture } = payload;

    let user = await userModel.findOne({ email });

    // Create user if doesn't exist
    if (!user) {
      user = await userModel.create({
        firstName: given_name || 'Unknown',
        lastName: family_name || 'User',
        email,
        profileImageUrl: picture,
        password: await bcrypt.hash(email + process.env.JWT_SECRET, 10), // dummy password
      });
    }

    const dataJWT = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION }
    );

    return res.status(statusCode.ok).json({
      message: "Google login successful.",
      token: dataJWT,
      user: {
        _id: user._id,
        profileImageUrl: user.profileImageUrl,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        address: user.address,
        phone: user.phone,
        gender: user.gender,
        isAdmin: user.isAdmin,
        createdAt: moment(user.createdAt).format("YYYY-MM-DD hh:mm A"),
        updatedAt: moment(user.updatedAt).format("YYYY-MM-DD hh:mm A"),
      },
    });

  } catch (error) {
    console.error("Google login error", error);
    return res.status(statusCode.internalServerError).json({ error: error.message });
  }
};

module.exports = googleLogin;
