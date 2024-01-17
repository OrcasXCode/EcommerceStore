const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  token: {
    type: String,
  },
  userType: {
    type: String,
    enum: ["Admin", "Seller", "User"],
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
