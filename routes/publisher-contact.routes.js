const express = require("express");
const router = express.Router();
const {
  getAllPublisherContactsController,
  postPublisherContactsController,
  deletePublisherContactsControllerById,
  updatePublisherContactsControllerById,
} = require("../controllers/publisher-contact.controllers");

router.post("/", postPublisherContactsController);
router.get("/", getAllPublisherContactsController);
router.delete("/:id", deletePublisherContactsControllerById);
router.put("/:id", updatePublisherContactsControllerById);

module.exports = router;
