const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Seller = mongoose.model("Seller", SellerSchema);
module.exports = Seller;
