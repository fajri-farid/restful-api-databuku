const express = require("express");
const router = express.Router();
const {
  getAllReviewReplyLikeDislikeController,
  postReviewReplyLikeDislikeController,
  deleteReviewReplyLikeDislikeControllerById,
  updateReviewReplyLikeDislikeControllerById,
} = require("../controllers/review-reply-like-dislike.controllers");

router.post("/", postReviewReplyLikeDislikeController);
router.get("/", getAllReviewReplyLikeDislikeController);
router.delete("/:id", deleteReviewReplyLikeDislikeControllerById);
router.put("/:id", updateReviewReplyLikeDislikeControllerById);

module.exports = router;
