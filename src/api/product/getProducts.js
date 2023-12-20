const Product = require("../../models/product");

const getProducts = async (req, res, next) => {
  try {
    const filterOptions = req.query || {};

    // if (!filterOptions || Object.keys(filterOptions).length === 0) {
    //   res.status(400).send({ status: "Bad Request!!" });
    // }

    const products = await Product.find(filterOptions);

    res.send(products);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getProducts;
