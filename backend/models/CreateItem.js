const { default: mongoose } = require("mongoose");

const CreateNewItemSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  discount: {
    type: Number,
    required: true,
    trim: true,
  },
  discountedPrice: {
    type: Number,
    required: true,
    trim: true,
  },
  image: {
    type: String,
  },
});

const CreateNewItem = mongoose.model("CreateNewItem", CreateNewItemSchema);
module.exports = CreateNewItem;
