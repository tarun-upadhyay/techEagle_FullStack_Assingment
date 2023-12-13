require("dotenv").config();
const express = require("express");
require("express-async-errors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const connect = require("./DB/db.config");
const authRouter = require("./routes/authRoute");
const errorHandlerMiddleware = require("./middleware/error-handler");
const { NotFoundError } = require("./errors");
const app = express();
app.use(express.json());

app.use(morgan("tiny"));

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.get("/", (req, res) => {
  return res.send("<h2>E commerce API</h2>");
});

app.use("/api/v1/auth", authRouter);
app.use(errorHandlerMiddleware);
app.use(NotFoundError);

const port = process.env.PORT || 8080;
app.listen(port, async () => {
  try {
    await connect(
      "mongodb+srv://tarunupadhyay:tarunupadhyay@cluster0.ad4jqwu.mongodb.net/techEagle_Ass?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.log(error);
  }
  console.log(`My port is running on ${port}`);
});
