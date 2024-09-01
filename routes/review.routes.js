const express = require("express");
const router = express.Router();
const {
  getAllReviewController,
  postReviewController,
  deleteReviewControllerById,
  updateReviewControllerById,
} = require("../controllers/review.controllers");
const { checkAuth } = require("./../middleware/auth/auth-login.middleware");
const {
  createReviewValidationSchema,
  putReviewValidationSchema,
} = require("../middleware/validation/review.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkSchema(createReviewValidationSchema),
  handleValidationErrors,
  postReviewController
);
router.get("/", getAllReviewController);
router.delete("/:id", checkAuth, deleteReviewControllerById);
router.put(
  "/:id",
  checkAuth,
  checkSchema(putReviewValidationSchema),
  handleValidationErrors,
  updateReviewControllerById
);

module.exports = router;
