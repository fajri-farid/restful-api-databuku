const express = require("express");
const router = express.Router();
const {
  getAllReviewController,
  postReviewController,
  deleteReviewControllerById,
  updateReviewControllerById,
} = require("../controllers/review.controllers");
const { checkAuth } = require("./../middleware/auth/auth-login.middleware");

router.post("/", checkAuth, postReviewController);
router.get("/", getAllReviewController);
router.delete("/:id", checkAuth, deleteReviewControllerById);
router.put("/:id", checkAuth, updateReviewControllerById);

module.exports = router;
