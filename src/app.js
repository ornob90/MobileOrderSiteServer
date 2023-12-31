const express = require("express");
const cors = require("cors");
require("dotenv").config();

// middle wares

// error handlers
const globalErrorHandler = require("./utils/globalErrorHandler");

// routes
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const userRoutes = require("./routes/user");
const favoriteRoutes = require("./routes/favorite");
const orderRoutes = require("./routes/order");

// utils

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      process.env.LOCAL_CLIENT,
      process.env.CLIENT_MAIN,
      process.env.CLIENT_SECONDARY,
    ],
    credentials: true,
  })
);

// router middleware
app.use(productRoutes);
app.use(cartRoutes);
app.use(userRoutes);
app.use(favoriteRoutes);
app.use(orderRoutes);

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${res.originalUrl} on the server`);
  error.status = 404;

  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

// const main = async () => {
//   await connectDB();
//   // sendEMail();
//   app.listen(port, () => {
//     console.log("Server running...");
//   });
// };

// main();

module.exports = app;
