const express = require("express");
const router = express.Router();
const {
  getAllReviewLikeDislikeController,
  postReviewLikeDislikeController,
  deleteReviewLikeDislikeControllerById,
  updateReviewLikeDislikeControllerById,
} = require("../controllers/review-like-dislike.controllers");

router.post("/", postReviewLikeDislikeController);
router.get("/", getAllReviewLikeDislikeController);
router.delete("/:id", deleteReviewLikeDislikeControllerById);
router.put("/:id", updateReviewLikeDislikeControllerById);

module.exports = router;
