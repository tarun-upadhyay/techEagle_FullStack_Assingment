const { default: mongoose } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
    },
  },
  phone: {
    type: String,
    required: [true, "Please provide phone no."],
    minlength: 10,
    maxlength: 13,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide phone no."],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ["manager", "customer"],
    default: "customer",
  },
  address: [],
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (canditatePassword) {
  try {
    const isMatch = await bcrypt.compare(canditatePassword, this.password);
    return isMatch;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = mongoose.model("User", UserSchema);
