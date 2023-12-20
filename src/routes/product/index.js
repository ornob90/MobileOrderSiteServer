const getListOfUniqueCategories = require("../../api/product/getListOfUniqueCategories");
const getProducts = require("../../api/product/getProducts");

const router = require("express").Router();

// GET
router.get("/products", getProducts);
router.get("/list-of-categories", getListOfUniqueCategories);

module.exports = router;
