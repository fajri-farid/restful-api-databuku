const express = require("express");
const router = express.Router();
const {
  getAllReviewLikeDislikeController,
  postReviewLikeDislikeController,
  deleteReviewLikeDislikeControllerById,
  updateReviewLikeDislikeControllerById,
} = require("../controllers/review-like-dislike.controllers");
const { checkAuth } = require("./../middleware/auth/auth-login.middleware");
const {
  createReviewReplyLikeDislikeValidationSchema,
  putReviewReplyLikeDislikeValidationSchema,
} = require("../middleware/validation/review-like-dislike.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkSchema(createReviewReplyLikeDislikeValidationSchema),
  handleValidationErrors,
  postReviewLikeDislikeController
);
router.get("/", getAllReviewLikeDislikeController);
router.delete("/:id", checkAuth, deleteReviewLikeDislikeControllerById);
router.put(
  "/:id",
  checkAuth,
  checkSchema(putReviewReplyLikeDislikeValidationSchema),
  handleValidationErrors,
  updateReviewLikeDislikeControllerById
);

module.exports = router;
