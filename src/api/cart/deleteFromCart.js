const { ObjectId } = require("mongodb");
const Cart = require("../../models/cart");

const deleteFromCart = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (id.length < 24) {
      return res
        .status(400)
        .send({ status: "Bad Request!!", message: "Invalid ID!!" });
    }

    const response = await Cart.deleteOne({ _id: new ObjectId(id) });

    res.send({
      status: response.acknowledged,
      deleteOne: response.deletedCount > 0,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = deleteFromCart;
