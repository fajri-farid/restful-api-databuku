const express = require("express");
const router = express.Router();
const {
  getAllPublisherContactsController,
  postPublisherContactsController,
  deletePublisherContactsControllerById,
  updatePublisherContactsControllerById,
} = require("../controllers/publisher-contact.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");
const {
  createPublisherContactValidationSchema,
  putPublisherContactValidationSchema,
} = require("../middleware/validation/publisher-contact.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkAuthAdmin,
  checkSchema(createPublisherContactValidationSchema),
  handleValidationErrors,
  postPublisherContactsController
);
router.get("/", getAllPublisherContactsController);
router.delete(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  deletePublisherContactsControllerById
);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  checkSchema(putPublisherContactValidationSchema),
  handleValidationErrors,
  updatePublisherContactsControllerById
);

module.exports = router;
