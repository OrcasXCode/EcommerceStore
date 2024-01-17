const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
});

const Seller = mongoose.model("Seller", SellerSchema);
module.exports = Seller;
