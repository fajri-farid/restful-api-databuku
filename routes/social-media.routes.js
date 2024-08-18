const express = require("express");
const router = express.Router();
const {
  getAllSocialMediaController,
  postSocialMediaController,
  deleteSocialMediaControllerById,
  updateSocialMediaControllerById,
} = require("../controllers/social-media.controllers");

router.post("/", postSocialMediaController);
router.get("/", getAllSocialMediaController);
router.delete("/:id", deleteSocialMediaControllerById);
router.put("/:id", updateSocialMediaControllerById);

module.exports = router;
