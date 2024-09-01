const express = require("express");
const router = express.Router();
const {
  getAllBookTagsController,
  postBookTagsController,
  deleteBookTagsControllerById,
  updateBookTagsControllerById,
} = require("../controllers/book-tags.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");
const {
  createBookTagsValidationSchema,
  putBookTagsValidationSchema,
} = require("../middleware/validation/book-tags.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkAuthAdmin,
  checkSchema(createBookTagsValidationSchema),
  handleValidationErrors,
  postBookTagsController
);
router.get("/", getAllBookTagsController);
router.delete("/:id", checkAuth, checkAuthAdmin, deleteBookTagsControllerById);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  checkSchema(putBookTagsValidationSchema),
  handleValidationErrors,
  updateBookTagsControllerById
);

module.exports = router;
