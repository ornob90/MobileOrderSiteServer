const { ObjectId } = require("mongodb");
const Product = require("../../models/product");

const getProductDetails = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id || id.length !== 24) {
      return res
        .status(400)
        .send({ status: "Bad Request!!", message: "valid id needed" });
    }

    const product = await Product.findOne({ _id: new ObjectId(id) });
    res.send(product);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getProductDetails;
