const { ObjectId } = require("mongodb");
const Cart = require("../../models/cart");

const clearCart = async (email) => {
  try {
    const result = await Cart.deleteMany({ userEmail: email });
    // console.log(result);
    return result?.deletedCount > 0 || result;
  } catch (error) {
    return error;
  }
};

module.exports = clearCart;
