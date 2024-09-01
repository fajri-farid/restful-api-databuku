const express = require("express");
const router = express.Router();
const {
  getAllReviewReplyLikeDislikeController,
  postReviewReplyLikeDislikeController,
  deleteReviewReplyLikeDislikeControllerById,
  updateReviewReplyLikeDislikeControllerById,
} = require("../controllers/review-reply-like-dislike.controllers");
const { checkAuth } = require("./../middleware/auth/auth-login.middleware");
const {
  createReviewReplyLikeDislikeValidationSchema,
  putReviewReplyLikeDislikeValidationSchema,
} = require("../middleware/validation/review-reply-like-dislike.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkSchema(createReviewReplyLikeDislikeValidationSchema),
  handleValidationErrors,
  postReviewReplyLikeDislikeController
);
router.get("/", getAllReviewReplyLikeDislikeController);
router.delete("/:id", checkAuth, deleteReviewReplyLikeDislikeControllerById);
router.put(
  "/:id",
  checkAuth,
  checkSchema(putReviewReplyLikeDislikeValidationSchema),
  handleValidationErrors,
  updateReviewReplyLikeDislikeControllerById
);

module.exports = router;
