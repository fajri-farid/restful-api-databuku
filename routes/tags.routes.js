const express = require("express");
const router = express.Router();
const {
  getAllTagController,
  postTagController,
  deleteTagControllerById,
  updateTagControllerById,
} = require("../controllers/tags.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");
const {
  createTagsValidationSchema,
  putTagsValidationSchema,
} = require("../middleware/validation/tags.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkAuthAdmin,
  checkSchema(createTagsValidationSchema),
  handleValidationErrors,
  postTagController
);
router.get("/", getAllTagController);
router.delete("/:id", checkAuth, checkAuthAdmin, deleteTagControllerById);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  checkSchema(putTagsValidationSchema),
  handleValidationErrors,
  updateTagControllerById
);

module.exports = router;
