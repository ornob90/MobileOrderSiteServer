const { ObjectId } = require("mongodb");
const Cart = require("../../models/cart");

const getCartByUser = async (req, res, next) => {
  try {
    const { email } = req.params;

    const cartProducts = await Cart.find({ userEmail: email }).populate(
      "productID"
    );

    res.send(cartProducts);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getCartByUser;
