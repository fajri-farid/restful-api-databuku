const express = require("express");
const router = express.Router();
const {
  getAllBookStoreController,
  postBookStoreController,
  deleteBookStoreController,
  updateBookStoreController,
  getBookStoreByIdController,
} = require("../controllers/book-store.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");
const {
  createBookStoreValidationSchema,
  putBookStoreValidationSchema,
} = require("../middleware/validation/book-store.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkAuthAdmin,
  checkSchema(createBookStoreValidationSchema),
  handleValidationErrors,
  postBookStoreController
);
router.get("/", getAllBookStoreController);
router.get("/:id", getBookStoreByIdController);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  checkSchema(putBookStoreValidationSchema),
  handleValidationErrors,
  updateBookStoreController
);
router.delete("/:id", checkAuth, checkAuthAdmin, deleteBookStoreController);

module.exports = router;
