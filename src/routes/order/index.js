const addOrder = require("../../api/order/addOrder");

const router = require("express").Router();

// POST
router.post("/order/:email", addOrder);

module.exports = router;
