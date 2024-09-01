const express = require("express");
const router = express.Router();
const {
  postAuthorController,
  getAllAuthorController,
  deleteAuthorController,
  updateAuthorController,
  getAuthorByIdController,
} = require("../controllers/author.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");
const {
  createAuthorValidationSchema,
  putAuthorValidationSchema,
} = require("../middleware/validation/author.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkAuthAdmin,
  checkSchema(createAuthorValidationSchema),
  handleValidationErrors,
  postAuthorController
);
router.get("/", getAllAuthorController);
router.get("/:id", checkAuth, getAuthorByIdController);
router.delete("/:id", checkAuth, checkAuthAdmin, deleteAuthorController);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  checkSchema(putAuthorValidationSchema),
  handleValidationErrors,
  updateAuthorController
);

module.exports = router;
