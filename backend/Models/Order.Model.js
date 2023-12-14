const { default: mongoose, Schema } = require("mongoose");

const SingleCartItemSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
  product: { type: mongoose.Schema.ObjectId, ref: "Product", required: true },
});
const OrderSchema = new mongoose.Schema(
  {
    totalAmount: {
      type: Number,
      required: true,
    },
    orderItems: [SingleCartItemSchema],
    totalItems: { type: Number },
    status: {
      type: String,
      enum: [
        "Pending",
        "Failed",
        "Paid",
        "Accepted",
        "Delivered",
        "Canceled",
        "Shipped",
        "Out for Delivery",
      ],
      default: "Pending",
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
