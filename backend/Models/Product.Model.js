const { default: mongoose } = require("mongoose");

const weightSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    enum: ["gram", "kilogram", "lbs", "pounds"],
    required: true,
  },
});
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide product name"],
      maxlength: [100, "Name can not be more than 100 chars"],
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: [true, "Please provide product description"],
      maxlength: [1000, "Description can not be more than 1000 characters"],
    },
    weight: {
      type: weightSchema,
      required: [true, "Please enter weight to the field"],
    },
    stock: { type: Number, min: [0, "wrong min stock"], default: 0 },
    price: {
      type: Number,
      required: [true, "Please provide product price"],
      default: 0,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
