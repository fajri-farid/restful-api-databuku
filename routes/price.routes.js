const express = require("express");
const router = express.Router();
const {
  getAllPriceController,
  getPriceByIdController,
  postPriceController,
  deletePriceController,
  updatePriceController,
} = require("../controllers/price.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");
const {
  createPriceValidationSchema,
  putPriceValidationSchema,
} = require("../middleware/validation/price.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkAuthAdmin,
  checkSchema(createPriceValidationSchema),
  handleValidationErrors,
  postPriceController
);
router.get("/", getAllPriceController);
router.get("/:id", getPriceByIdController);
router.delete("/:id", checkAuth, checkAuthAdmin, deletePriceController);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  checkSchema(putPriceValidationSchema),
  handleValidationErrors,
  updatePriceController
);

module.exports = router;
