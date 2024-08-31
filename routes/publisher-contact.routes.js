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
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuth, checkAuthAdmin, postPublisherContactsController);
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
  updatePublisherContactsControllerById
);

module.exports = router;
