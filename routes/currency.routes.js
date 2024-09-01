const express = require("express");
const router = express.Router();
const {
  getAllCurrencyController,
  postCurrencyController,
  deleteCurrencyControllerById,
  updateCurrencyControllerById,
} = require("../controllers/currency.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");
const { checkSchema } = require("express-validator");
const {
  createCurrencyValidationSchema,
  putCurrencyValidationSchema,
} = require("../middleware/validation/currency.validation.middleware.js");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkAuthAdmin,
  checkSchema(createCurrencyValidationSchema),
  handleValidationErrors,
  postCurrencyController
);
router.get("/", getAllCurrencyController);
router.delete("/:id", checkAuth, checkAuthAdmin, deleteCurrencyControllerById);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  checkSchema(putCurrencyValidationSchema),
  handleValidationErrors,
  updateCurrencyControllerById
);

module.exports = router;
