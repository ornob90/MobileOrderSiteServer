const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  addedDate: {
    type: Date,
    default: Date.now,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
