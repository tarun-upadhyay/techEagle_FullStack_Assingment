const { StatusCodes } = require("http-status-codes");
const Cart = require("../Models/Cart.Model");
const CustomError = require("../errors");
const { checkPermissions } = require("../Utils");
const ProductModel = require("../Models/Product.Model");

const createCartItem = async (req, res) => {
  req.body.user = req.user.userId;
  const { product } = req.body;
  if (!product) {
    throw new CustomError.BadRequestError("No cart items provided");
  }

  const isAlreadyinCart = await Cart.findOne({
    product: product,
    user: req.body.user,
  });
  // console.log(isAlreadyinCart);
  if (isAlreadyinCart) {
    throw new CustomError.BadRequestError(
      "Already in cart please increase or decrease quantity"
    );
  }
  const cart = await Cart.create(req.body);

  return res.status(StatusCodes.CREATED).json({ cart });
};
const getAllCartItem = async (req, res) => {
  req.body.user = req.user.userId;
  const cartItems = await Cart.find({ user: req.body.user }).populate(
    "product"
  );
  const totalPrice = cartItems.reduce((total, item) => {
    const productPrice = item.product.price * item.quantity;
    return total + productPrice;
  }, 0);
  // console.log(totalPrice);
  res.status(StatusCodes.OK).json({ cartItems,totalPrice, count: cartItems.length });
};

const updateCartItem = async (req, res) => {
  const { id: cartId } = req.params;
  const { quantity } = req.body;
  console.log(req.body);
  if (!quantity) {
    throw new CustomError.BadRequestError("Please provide quantity to update");
  }

  const cartItem = await Cart.findOne({ _id: cartId });

  if (!cartItem)
    throw new CustomError.NotFoundError(
      `No cart item found with this id: ${cartId}`
    );

  checkPermissions(req.user, cartItem.user);

  cartItem.quantity = quantity;
  await cartItem.save();
  res.status(StatusCodes.OK).json({ cartItem });
};
const deleteCartItem = async (req, res) => {
  const { id: cartId } = req.params;

  const cartItem = await Cart.findOne({ _id: cartId });

  if (!cartItem)
    throw new CustomError.NotFoundError(`No cart with id: ${cartId}`);

  checkPermissions(req.user, cartItem.user);
  await cartItem.deleteOne();

  res.status(StatusCodes.OK).json({ msg: "Deleted successfully", cartItem });
};

module.exports = {
  createCartItem,
  getAllCartItem,
  updateCartItem,
  deleteCartItem,
};
