const {
  createOrder,
  getAllOrderCustomer,
  getSingleOrder,
  updateOrder,
  getAllOrdersManager,
} = require("../controller/orderController");
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .post([authenticateUser, authorizePermissions("customer")], createOrder)
  .get(
    [authenticateUser, authorizePermissions("customer")],
    getAllOrderCustomer
  );

router
  .route("/manager")
  .get(
    [authenticateUser, authorizePermissions("manager")],
    getAllOrdersManager
  );

router
  .route("/:id")
  .get([authenticateUser], getSingleOrder)
  .patch([authenticateUser, authorizePermissions("manager")], updateOrder);

module.exports = router;
