const addToCart = require("../../api/cart/addToCart");
const deleteFromCart = require("../../api/cart/deleteFromCart");
const getCartByUser = require("../../api/cart/getCartByUser");
const getCartStates = require("../../api/cart/getCartStates");

const router = require("express").Router();

// GET
router.get("/cart-products/:email", getCartByUser);
router.get("/cart-states/:email", getCartStates);

// POST
router.post("/add-to-cart", addToCart);

// DELETE
router.delete("/cart/:id", deleteFromCart);

module.exports = router;
