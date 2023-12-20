const Product = require("../../models/product");

const getListOfUniqueCategories = async (req, res, next) => {
  try {
    const uniqueCategories = await Product.aggregate([
      {
        $group: {
          _id: null,
          names: { $addToSet: "$name" },
          types: { $addToSet: "$type" },
          processors: { $addToSet: "$processor" },
          os: { $addToSet: "$os" },
        },
      },
      { $project: { _id: 0, names: 1, types: 1, processors: 1, os: 1 } },
    ]);

    if (uniqueCategories.length === 0) {
      return res.status(404).json({ message: "No products found." });
    }

    res.send(uniqueCategories[0]);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getListOfUniqueCategories;
