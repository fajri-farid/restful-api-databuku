const express = require("express");
const router = express.Router();
const {
  getAllReviewReplyController,
  postReviewReplyController,
  deleteReviewReplyControllerById,
  updateReviewReplyControllerById,
} = require("../controllers/review-reply.controllers");
const { checkAuth } = require("./../middleware/auth/auth-login.middleware");
const {
  createReviewReplyValidationSchema,
  putReviewReplyValidationSchema,
} = require("../middleware/validation/review-reply.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkSchema(createReviewReplyValidationSchema),
  handleValidationErrors,
  postReviewReplyController
);
router.get("/", getAllReviewReplyController);
router.delete("/:id", checkAuth, deleteReviewReplyControllerById);
router.put(
  "/:id",
  checkAuth,
  checkSchema(putReviewReplyValidationSchema),
  handleValidationErrors,
  updateReviewReplyControllerById
);

module.exports = router;
