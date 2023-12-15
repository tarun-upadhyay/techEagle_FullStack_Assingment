const { StatusCodes } = require("http-status-codes");
const Product = require("../Models/Product.Model");
const CustomError = require("../errors");
const createProduct = async (req, res) => {
  req.body.user = req.user.userId;
  console.log(req.body);
  const product = await Product.create(req.body);
  return res
    .status(StatusCodes.CREATED)
    .json({ product, msg: "Product added successfully" });
};
const getAllProduct = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products, count: products.length });
};
const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findOne({ _id: productId });
  if (!product)
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);

  return res.status(StatusCodes.OK).json({ product });
};
const updateProduct = async (req, res) => {
  const { id: productId } = req.params;
  console.log(productId, req.body);
  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product)
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);

  return res.status(StatusCodes.OK).json({ product });
};
const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOneAndDelete({ _id: productId });
  if (!product)
    throw new CustomError.NotFoundError(`No product with id: ${productId}`);

  return res.status(StatusCodes.OK).json({ product });
};

module.exports = {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
};
