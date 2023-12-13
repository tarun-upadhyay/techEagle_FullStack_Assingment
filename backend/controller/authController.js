const { StatusCodes } = require("http-status-codes");
const User = require("../Models/User.Modal");
const CustomError = require("../errors");
const { attachCookiesToResponse } = require("../Utils");

const register = async (req, res) => {
  const { email, name, phone, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });

  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email already exists!!");
  }

  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? "manager" : "customer";
  const user = await User.create({ name, email, password, role, phone });
  const tokenUser = { name: user.name, userId: user._id, role: user.role };

  attachCookiesToResponse({ res, user: tokenUser });
  return res
    .status(StatusCodes.OK)
    .json({ user: tokenUser, msg: "User Created Successfully" });
};
// This function is related to login of user.
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new CustomError.BadRequestError("Please provide email and password");
  }

  const user = await User.findOne({ email });

  if (!user) throw new CustomError.UnauthenticatedError("Invalid Credentials");

  const isPassword = await user.comparePassword(password);

  if (!isPassword)
    throw new CustomError.UnauthenticatedError("Invalid credentials");

  const tokenUser = { name: user.name, userId: user._id, role: user.role };

  attachCookiesToResponse({ res, user: tokenUser });

  return res.status(StatusCodes.OK).json({ user: tokenUser });
};

const logout = async (req, res) => {
  res.cookie("authToken", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(200).json({ msg: "User logged out" });
};
module.exports = { register, login,logout };
