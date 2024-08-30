const express = require("express");
const router = express.Router();
const {
  getAllSocialMediaController,
  postSocialMediaController,
  deleteSocialMediaControllerById,
  updateSocialMediaControllerById,
} = require("../controllers/social-media.controllers");
const {
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuthAdmin, postSocialMediaController);
router.get("/", getAllSocialMediaController);
router.delete("/:id", checkAuthAdmin, deleteSocialMediaControllerById);
router.put("/:id", checkAuthAdmin, updateSocialMediaControllerById);

module.exports = router;
