require("dotenv").config();
const express = require("express");
require("express-async-errors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const Product = require("./Models/Product.Model");
const connect = require("./DB/db.config");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const cartRouter = require("./routes/cartRoute");
const orderRouter = require("./routes/orderRoute");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");
const { StatusCodes } = require("http-status-codes");
const { isTokenValid } = require("./Utils");
const app = express();

app.use(helmet());
app.options("*", cors());
app.use(xss());
app.use(express.json());

app.use(morgan("tiny"));

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.get("/", (req, res) => {
  return res.send("<h2>E commerce API</h2>");
});
app.get("/session", (req, res) => {
  let token = req.signedCookies.authToken;
  if (token) {
    try {
      const { name, userId, role } = isTokenValid({ token });
      return res.status(StatusCodes.OK).json({ token, name, role });
    } catch (error) {
      console.log(error);
      throw new CustomError.UnauthenticatedError("Authentication Invaild");
    }
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: "Not logined" });
  }
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/order", orderRouter);
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 8080;
function start() {
  app.listen(port, async () => {
    try {
      await connect(process.env.MONGO_URI);
    } catch (error) {
      console.log(error);
    }
    console.log(`My port is running on ${port}`);
  });
  //  populateDB();
}
start();
async function populateDB() {
  const mockData = require("./products.json");

  await Product.create(mockData);
  console.log(`Success !!`);
  process.exit(0);
  try {
  } catch (error) {
    console.log(error);
  }
}
