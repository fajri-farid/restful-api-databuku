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
} = require("./../middleware/auth/auth-login.middleware");
const {
  createSocialMediaValidationSchema,
  putSocialMediaValidationSchema,
} = require("../middleware/validation/social-media.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkAuthAdmin,
  checkSchema(createSocialMediaValidationSchema),
  handleValidationErrors,
  postSocialMediaController
);
router.get("/", getAllSocialMediaController);
router.delete(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  deleteSocialMediaControllerById
);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  checkSchema(putSocialMediaValidationSchema),
  handleValidationErrors,
  updateSocialMediaControllerById
);

module.exports = router;
