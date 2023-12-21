const clearCart = require("../../lib/cart/clearCart");
const getCartProduct = require("../../lib/cart/getCartProducts");
const Order = require("../../models/order");

const addOrder = async (req, res, next) => {
  try {
    const { email } = req.params;

    let totalQuantity = 0;
    let totalPrice = 0;

    const cartProducts = await getCartProduct(email);

    if (!cartProducts) {
      return res
        .send(404)
        .send({ status: "Not Found!", message: "No product in the cart" });
    }

    for (const cartProduct of cartProducts) {
      const { productID: product, quantity } = cartProduct;
      totalQuantity += quantity;
      totalPrice += product?.price;
    }

    const orderData = {
      userEmail: email,
      quantity: totalQuantity,
      totalPrice,
    };

    const order = new Order(orderData);

    await order.save();

    const clearStatus = await clearCart(email);

    res.send({
      insertOne: true,
      cartCleared: clearStatus,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = addOrder;
