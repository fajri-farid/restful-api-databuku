const express = require("express");
const router = express.Router();
const {
  getAllPublisherSosmedController,
  postPublisherSosmedController,
  deletePublisherSosmedControllerById,
  updatePublisherSosmedControllerById,
} = require("../controllers/publisher-sosmed.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");
const {
  createPublisherSosmedValidationSchema,
  putPublisherSosmedValidationSchema,
} = require("../middleware/validation/publisher-sosmed.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkAuthAdmin,
  checkSchema(createPublisherSosmedValidationSchema),
  handleValidationErrors,
  postPublisherSosmedController
);
router.get("/", getAllPublisherSosmedController);
router.delete(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  deletePublisherSosmedControllerById
);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  checkSchema(putPublisherSosmedValidationSchema),
  handleValidationErrors,
  updatePublisherSosmedControllerById
);

module.exports = router;
