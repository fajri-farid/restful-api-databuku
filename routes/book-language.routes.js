const express = require("express");
const router = express.Router();
const {
  getAllBookLanguageController,
  postBookLanguageController,
  deleteBookLanguageControllerById,
  updateBookLanguageControllerById,
} = require("../controllers/book-language.controller");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");
const {
  createBookLanguageValidationSchema,
  putBookLanguageValidationSchema,
} = require("../middleware/validation/book-language.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkAuthAdmin,
  checkSchema(createBookLanguageValidationSchema),
  handleValidationErrors,
  postBookLanguageController
);
router.get("/", getAllBookLanguageController);
router.delete(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  deleteBookLanguageControllerById
);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  checkSchema(putBookLanguageValidationSchema),
  handleValidationErrors,
  updateBookLanguageControllerById
);

module.exports = router;
