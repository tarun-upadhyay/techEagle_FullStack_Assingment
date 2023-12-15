const { StatusCodes } = require("http-status-codes");
const ProductModel = require("../Models/Product.Model");
const OrderModel = require("../Models/Order.Model");
const CustomError = require("../errors");
const CartModel = require("../Models/Cart.Model");
const { checkPermissions } = require("../Utils");
const moment = require("moment");
const createOrder = async (req, res) => {
  const cartItems = await CartModel.find({ user: req.user.userId }).populate(
    "product"
  );

  //   console.log(cartItems);

  if (!cartItems || cartItems.length < 1)
    throw new CustomError.BadRequestError("No cart items provided");

  let orderItems = [],
    totalAmount = 0;

  for (const item of cartItems) {
    (orderItems = []), (totalAmount = 0);
    const dbProduct = await ProductModel.findOne({ _id: item.product._id });
    // console.log(dbProduct);
    if (!dbProduct)
      throw new CustomError.NotFoundError(
        `No product with id: ${item.product._id}`
      );
    // console.log(dbProduct);
    dbProduct.$inc("stock", -1 * item.quantity);
    // for optimum performance we should make inventory outside of product.
    await dbProduct.save();

    const { name, price, image, _id } = dbProduct;
    const singleOrderItem = {
      amount: item.quantity,
      name,
      price,
      image,
      product: _id,
    };
    orderItems = [...orderItems, singleOrderItem];
    totalAmount += item.quantity * price;
    const order = await OrderModel.create({
      orderItems,
      totalAmount,
      user: req.user.userId,
    });
    const deletefromCart = await CartModel.deleteOne({ _id: item._id });
  }
  res.status(StatusCodes.CREATED).json({ mag: "Created order" });
};

const getAllOrderCustomer = async (req, res) => {
  let allOrders = await OrderModel.find({ user: req.user.userId }).sort({
    createdAt: -1,
  });
  allOrders = allOrders.map((job) => {
    const dateorg = moment(job.createdAt).format("DD MMM YYYY");
    return { ...job.toObject(), createdAt: dateorg };
  });
  res.status(StatusCodes.OK).json({ allOrders, count: allOrders.length });
};
const getSingleOrder = async (req, res) => {
  const { id: orderId } = req.params;
  const order = await OrderModel.findOne({ _id: orderId });
  if (!order) {
    throw new CustomError.NotFoundError(`No order with id : ${orderId}`);
  }
  checkPermissions(req.user, order.user);
  res.status(StatusCodes.OK).json({ order });
};
const getAllOrdersManager = async (req, res) => {
  const allOrders = await OrderModel.find({});
  res.status(StatusCodes.OK).json({ allOrders, count: allOrders.length });
};
const updateOrder = async (req, res) => {
  const { id: orderId } = req.params;
  const { status } = req.body;

  const order = await OrderModel.findOne({ _id: orderId });
  if (!order) {
    throw new CustomError.NotFoundError(`No order with id : ${orderId}`);
  }
  checkPermissions(req.user, order.user);

  order.status = status;
  await order.save();

  res.status(StatusCodes.OK).json({ order });
};

module.exports = {
  createOrder,
  getAllOrderCustomer,
  getSingleOrder,
  updateOrder,
  getAllOrdersManager,
};
