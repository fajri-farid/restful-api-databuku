const express = require("express");
const router = express.Router();
const {
  createBookController,
  getAllBooksController,
  getBookByIdController,
  updateBookController,
  deleteBookController,
} = require("../controllers/book.controllers.js");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");
const {
  createBookValidationSchema,
  putBookValidationSchema,
} = require("../middleware/validation/book.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkAuthAdmin,
  checkSchema(createBookValidationSchema),
  handleValidationErrors,
  createBookController
);
router.get("/", getAllBooksController);
router.get("/:id", getBookByIdController);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  checkSchema(putBookValidationSchema),
  handleValidationErrors,
  updateBookController
);
router.delete("/:id", checkAuth, checkAuthAdmin, deleteBookController);

module.exports = router;
