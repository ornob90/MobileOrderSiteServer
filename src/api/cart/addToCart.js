const updateCartProduct = require("../../lib/cart/updateCartProduct");
const Cart = require("../../models/cart");

const addToCart = async (req, res, next) => {
  try {
    const product = req.body || {};

    if (!product) {
      return res
        .status(400)
        .send({ status: "Bad Request!!", message: "No Product Found" });
    }

    const updated = await updateCartProduct(product._id);
    // console.log("Updated", updated);
    if (updated) {
      return res.send({
        insertOne: false,
        updateOne: true,
      });
    }

    const cart = new Cart(product);
    await cart.save();

    res.send({
      insertOne: true,
      updateOne: false,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = addToCart;
