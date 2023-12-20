const getProducts = require("../../api/product/getProducts");

const router = require("express").Router();

// GET
router.get("/products", getProducts);

module.exports = router;
