const express = require("express");
const router = express.Router();
const {
  getAllSocialMediaController,
  postSocialMediaController,
  deleteSocialMediaControllerById,
  updateSocialMediaControllerById,
} = require("../controllers/social-media.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuth, checkAuthAdmin, postSocialMediaController);
router.get("/", getAllSocialMediaController);
router.delete(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  deleteSocialMediaControllerById
);
router.put("/:id", checkAuth, checkAuthAdmin, updateSocialMediaControllerById);

module.exports = router;
