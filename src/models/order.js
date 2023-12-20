const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  transactionID: {
    type: String,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
