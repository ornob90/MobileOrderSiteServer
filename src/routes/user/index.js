const addUser = require("../../api/user/addUser");

const router = require("express").Router();

// GET

// POST
router.post("/user", addUser);

module.exports = router;
