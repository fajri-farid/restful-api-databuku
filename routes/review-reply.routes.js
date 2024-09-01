const express = require("express");
const router = express.Router();
const {
  getAllReviewReplyController,
  postReviewReplyController,
  deleteReviewReplyControllerById,
  updateReviewReplyControllerById,
} = require("../controllers/review-reply.controllers");
const { checkAuth } = require("./../middleware/auth/auth-login.middleware");

router.post("/", checkAuth, postReviewReplyController);
router.get("/", getAllReviewReplyController);
router.delete("/:id", checkAuth, deleteReviewReplyControllerById);
router.put("/:id", checkAuth, updateReviewReplyControllerById);

module.exports = router;
