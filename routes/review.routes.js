const express = require("express");
const router = express.Router();
const {
  getAllReviewController,
  postReviewController,
  deleteReviewControllerById,
  updateReviewControllerById,
} = require("../controllers/review.controllers");

router.post("/", postReviewController);
router.get("/", getAllReviewController);
router.delete("/:id", deleteReviewControllerById);
router.put("/:id", updateReviewControllerById);

module.exports = router;
