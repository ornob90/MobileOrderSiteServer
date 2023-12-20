const User = require("../../models/user");

const addUser = async (req, res, next) => {
  try {
    const data = req.body;

    if (!data) {
      return res
        .status(400)
        .send({ status: "Bad Request!!", message: "No Data Found!!" });
    }

    const user = new User(data);

    await user.save();

    res.send({
      insertOne: true,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = addUser;
