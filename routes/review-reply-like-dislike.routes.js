const express = require("express");
const router = express.Router();
const {
  getAllReviewReplyLikeDislikeController,
  postReviewReplyLikeDislikeController,
  deleteReviewReplyLikeDislikeControllerById,
  updateReviewReplyLikeDislikeControllerById,
} = require("../controllers/review-reply-like-dislike.controllers");
const { checkAuth } = require("./../middleware/auth/auth-login.middleware");

router.post("/", checkAuth, postReviewReplyLikeDislikeController);
router.get("/", getAllReviewReplyLikeDislikeController);
router.delete("/:id", checkAuth, deleteReviewReplyLikeDislikeControllerById);
router.put("/:id", checkAuth, updateReviewReplyLikeDislikeControllerById);

module.exports = router;
