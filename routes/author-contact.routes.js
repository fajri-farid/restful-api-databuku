const express = require("express");
const router = express.Router();
const {
  getAllAuthorContactController,
  postAuthorContactController,
  deleteAuthorContactControllerById,
  updateAuthorContactControllerById,
} = require("../controllers/author-contact.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");
const {
  createAuthorContactValidationSchema,
  putAuthorContactValidationSchema,
} = require("../middleware/validation/author-contact.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkAuthAdmin,
  checkSchema(createAuthorContactValidationSchema),
  handleValidationErrors,
  postAuthorContactController
);
router.get("/", getAllAuthorContactController);
router.delete(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  deleteAuthorContactControllerById
);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  checkSchema(putAuthorContactValidationSchema),
  handleValidationErrors,
  updateAuthorContactControllerById
);

module.exports = router;
