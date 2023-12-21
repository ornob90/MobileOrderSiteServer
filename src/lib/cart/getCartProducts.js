const { ObjectId } = require("mongodb");
const Cart = require("../../models/cart");

const getCartProduct = async (email) => {
  try {
    const cartProducts = await Cart.find({
      userEmail: email,
    }).populate("productID");

    return cartProducts;
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = getCartProduct;
