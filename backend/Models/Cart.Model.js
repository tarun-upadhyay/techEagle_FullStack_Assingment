const { default: mongoose } = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
      required: [true, "Please provide quantity of product"],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
CartSchema.virtual("products", {
  ref: "Product",
  localField: "_id", //
  foreignField: "cart",
  justOne: false,
});

module.exports = mongoose.model("Cart", CartSchema);
