const express = require("express");
const router = express.Router();
const {
  getAllUserController,
  postUserController,
  deleteUserControllerById,
  updateUserControllerById,
  getUserByIdController,
} = require("../controllers/user.controllers");
const {
  createUserValidationSchema,
  putUserValidationSchema,
} = require("../middleware/validation/user.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");
const {
  checkEditOwnProfile,
  checkDeleteOwnProfile,
} = require("../middleware/auth/check-user.middleware.js");
const { checkAuth } = require("../middleware/auth/auth-login.middleware.js");

router.post(
  "/",
  checkSchema(createUserValidationSchema),
  handleValidationErrors,
  postUserController
);
router.get("/", getAllUserController);
router.get("/:id", getUserByIdController);
router.delete(
  "/:id",
  checkAuth,
  checkDeleteOwnProfile,
  deleteUserControllerById
);
router.put(
  "/:id",
  checkAuth,
  checkEditOwnProfile,
  checkSchema(putUserValidationSchema),
  handleValidationErrors,
  updateUserControllerById
);

module.exports = router;
