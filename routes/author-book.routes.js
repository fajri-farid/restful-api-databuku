const express = require("express");
const router = express.Router();
const {
  getAllAuthorBookController,
  postAuthorBookController,
  deleteAuthorBookControllerById,
  updateAuthorBookControllerById,
} = require("../controllers/author-book.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");
const {
  createAuthorBookValidationSchema,
  putAuthorBookValidationSchema,
} = require("../middleware/validation/author-book.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkAuthAdmin,
  checkSchema(createAuthorBookValidationSchema),
  handleValidationErrors,
  postAuthorBookController
);
router.get("/", checkAuth, checkAuthAdmin, getAllAuthorBookController);
router.delete(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  deleteAuthorBookControllerById
);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  checkSchema(putAuthorBookValidationSchema),
  handleValidationErrors,
  updateAuthorBookControllerById
);

module.exports = router;
