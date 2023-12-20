const Product = require("../../models/product");

const getProducts = async (req, res, next) => {
  try {
    const { price, memory, ...filterOptions } = req.query || {};

    const validatedPrice = parseFloat(price);
    const validatedMemory = parseInt(memory);

    if (!isNaN(validatedPrice)) {
      filterOptions.price = {
        $lt: validatedPrice,
      };
    }

    if (!isNaN(validatedMemory)) {
      filterOptions.memory = {
        $lt: validatedMemory,
      };
    }

    const products = await Product.find(filterOptions);

    res.send(products);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getProducts;
