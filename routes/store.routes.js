const express = require("express");
const router = express.Router();
const {
  getAllStoreController,
  getStoreByIdController,
  postStoreController,
  deleteStoreControllerById,
  updateStoreControllerById,
} = require("../controllers/store.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");
const {
  createStoreValidationSchema,
  putStoreValidationSchema,
} = require("../middleware/validation/store.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkAuthAdmin,
  checkSchema(createStoreValidationSchema),
  handleValidationErrors,
  postStoreController
);
router.get("/", getAllStoreController);
router.get("/:id", getStoreByIdController);
router.delete("/:id", checkAuth, checkAuthAdmin, deleteStoreControllerById);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  checkSchema(putStoreValidationSchema),
  handleValidationErrors,
  updateStoreControllerById
);

module.exports = router;
