const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");
dotenv.config();

exports.auth = async (req, res, next) => {
  try {
    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      console.log(error);
      return res.status(404).json({
        success: false,
        msg: "Token not found",
      });
    }

    try {
      //note:-
      const decodedToken = await jwt.decode(token, process.env.JWT_SECRET);
      // console.log("decoded token:", decodedToken);
      req.user = decodedToken;
      // console.log(req.user._id);
    } catch (error) {
      // console.log(error);
      return res.status(401).json({
        success: false,
        msg: "Invalid Token!",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.isSeller = async (req, res, next) => {
  try {
    const userType = await User.findOne({
      email: req.user.email,
    });
    if (userType.userType !== "Seller") {
      return res.status(401).json({
        success: false,
        msg: "You are not a seller! this is protected route for seller only",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "User role can't be found",
    });
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    const userType = await User.findOne({
      email: req.user.email,
    });
    if (userType.userType !== "Admin") {
      return res.status(401).json({
        success: false,
        msg: "You are not a Admin! this is protected route for Admin only",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "User role can't be found",
    });
  }
};

exports.isUser = async (req, res, next) => {
  try {
    const userType = await User.findOne({
      email: req.user.email,
    });
    if (userType.userType !== "User") {
      return res.status(401).json({
        success: false,
        msg: "You are not a User! this is protected route for User only",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "User role can't be found",
    });
  }
};
