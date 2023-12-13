const { mongoose } = require("mongoose");

const connect = (url) => {
  mongoose
    .connect(url)
    .then((res) => console.log("DB is connected"))
    .catch((err) => console.log("Error is", err));
};
module.exports = connect;
