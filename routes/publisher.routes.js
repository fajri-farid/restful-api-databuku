const express = require("express");
const router = express.Router();
const {
  getAllPublisherController,
  getPublisherByIdController,
  postPublisherController,
  deletePublisherControllerById,
  updatePublisherControllerById,
} = require("../controllers/publisher.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");
const {
  createPublisherValidationSchema,
  putPublisherValidationSchema,
} = require("../middleware/validation/publisher.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkAuthAdmin,
  checkSchema(createPublisherValidationSchema),
  handleValidationErrors,
  postPublisherController
);
router.get("/", getAllPublisherController);
router.get("/:id", getPublisherByIdController);
router.delete("/:id", checkAuth, checkAuthAdmin, deletePublisherControllerById);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  checkSchema(putPublisherValidationSchema),
  handleValidationErrors,
  updatePublisherControllerById
);

module.exports = router;
