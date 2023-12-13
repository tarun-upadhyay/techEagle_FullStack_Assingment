const {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controller/productController");
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .post([authenticateUser, authorizePermissions("manager")], createProduct)
  .get(getAllProduct);

router
  .route("/:id")
  .get(getSingleProduct)
  .patch([authenticateUser, authorizePermissions("manager")], updateProduct)
  .delete([authenticateUser, authorizePermissions("manager")], deleteProduct);

module.exports = router;
