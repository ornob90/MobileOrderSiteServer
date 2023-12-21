const Cart = require("../../models/cart");

const getCartStates = async (req, res, next) => {
  try {
    const { email: userEmail } = req.params;

    // Fetch the cart items for the user
    const cartItems = await Cart.find({ userEmail }).populate("productID");

    let totalProductCount = 0;
    let totalAmount = 0;

    // Calculate total product count and total amount
    cartItems.forEach((item) => {
      totalProductCount += item.quantity;
      totalAmount += item.quantity * item.productID.price;
    });

    res.send({
      totalProductCount,
      totalAmount,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getCartStates;
