const express = require("express");
const router = express.Router();
const {
  getAllReviewLikeDislikeController,
  postReviewLikeDislikeController,
  deleteReviewLikeDislikeControllerById,
  updateReviewLikeDislikeControllerById,
} = require("../controllers/review-like-dislike.controllers");
const { checkAuth } = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuth, postReviewLikeDislikeController);
router.get("/", getAllReviewLikeDislikeController);
router.delete("/:id", checkAuth, deleteReviewLikeDislikeControllerById);
router.put("/:id", checkAuth, updateReviewLikeDislikeControllerById);

module.exports = router;
