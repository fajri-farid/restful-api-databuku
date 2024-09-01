const express = require("express");
const router = express.Router();
const {
  getAllLanguageController,
  postLanguageController,
  deleteLanguageControllerById,
  updateLanguageControllerById,
} = require("../controllers/language.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");
const {
  createLanguageValidationSchema,
  putLanguageValidationSchema,
} = require("../middleware/validation/language.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkAuthAdmin,
  checkSchema(createLanguageValidationSchema),
  handleValidationErrors,
  postLanguageController
);
router.get("/", getAllLanguageController);
router.delete("/:id", checkAuth, checkAuthAdmin, deleteLanguageControllerById);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  checkSchema(putLanguageValidationSchema),
  handleValidationErrors,
  updateLanguageControllerById
);

module.exports = router;
