const express = require("express");
const router = express.Router();
const {
  getAllReviewReplyController,
  postReviewReplyController,
  deleteReviewReplyControllerById,
  updateReviewReplyControllerById,
} = require("../controllers/review-reply.controllers");

router.post("/", postReviewReplyController);
router.get("/", getAllReviewReplyController);
router.delete("/:id", deleteReviewReplyControllerById);
router.put("/:id", updateReviewReplyControllerById);

module.exports = router;
