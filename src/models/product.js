const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    require: true,
  },
  brand: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  processor: {
    type: String,
    required: true,
  },
  memory: {
    type: Number,
    required: true,
  },
  os: {
    type: String,
    required: true,
  },
  screen_size: {
    type: Number,
    required: true,
  },
  camera: {
    type: Number,
    required: true,
  },
  battery: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
