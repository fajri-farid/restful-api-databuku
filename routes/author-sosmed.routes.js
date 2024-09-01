const express = require("express");
const router = express.Router();
const {
  getAllAuthorSosmedController,
  postAuthorSosmedController,
  deleteAuthorSosmedControllerById,
  updateAuthorSosmedControllerById,
} = require("../controllers/author-sosmed.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");
const {
  createAuthorSosmedValidationSchema,
  putAuthorSosmedValidationSchema,
} = require("../middleware/validation/author-sosmed.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkAuthAdmin,
  checkSchema(createAuthorSosmedValidationSchema),
  handleValidationErrors,
  postAuthorSosmedController
);
router.get("/", getAllAuthorSosmedController);
router.delete(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  deleteAuthorSosmedControllerById
);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  checkSchema(putAuthorSosmedValidationSchema),
  handleValidationErrors,
  updateAuthorSosmedControllerById
);

module.exports = router;
