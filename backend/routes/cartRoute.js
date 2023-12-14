const {
  createCartItem,
  getAllCartItem,
  updateCartItem,
  deleteCartItem,
} = require("../controller/cartController");
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .get([authenticateUser, authorizePermissions("customer")], getAllCartItem)
  .post([authenticateUser, authorizePermissions("customer")], createCartItem);

router
  .route("/:id")
  .patch([authenticateUser, authorizePermissions("customer")], updateCartItem)
  .delete([authenticateUser, authorizePermissions("customer")], deleteCartItem);

module.exports = router;
