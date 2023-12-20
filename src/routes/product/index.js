const getListOfUniqueCategories = require("../../api/product/getListOfUniqueCategories");
const getProductDetails = require("../../api/product/getProductDetail");
const getProducts = require("../../api/product/getProducts");

const router = require("express").Router();

// GET
router.get("/products", getProducts);
router.get("/list-of-categories", getListOfUniqueCategories);
router.get("/product/:id", getProductDetails);

module.exports = router;
