const {
  createOrder,
  getAllOrderCustomer,
  getSingleOrder,
  updateOrder,
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
  .route("/:id")
  .get([authenticateUser], getSingleOrder)
  .patch([authenticateUser, authorizePermissions("manager")], updateOrder);

module.exports = router;
