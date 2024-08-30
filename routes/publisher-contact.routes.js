const express = require("express");
const router = express.Router();
const {
  getAllPublisherContactsController,
  postPublisherContactsController,
  deletePublisherContactsControllerById,
  updatePublisherContactsControllerById,
} = require("../controllers/publisher-contact.controllers");
const {
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuthAdmin, postPublisherContactsController);
router.get("/", getAllPublisherContactsController);
router.delete("/:id", checkAuthAdmin, deletePublisherContactsControllerById);
router.put("/:id", checkAuthAdmin, updatePublisherContactsControllerById);

module.exports = router;
