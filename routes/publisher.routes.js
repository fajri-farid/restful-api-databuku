const express = require("express");
const router = express.Router();
const {
  getAllPublisherController,
  getPublisherByIdController,
  postPublisherController,
  deletePublisherControllerById,
  updatePublisherControllerById,
} = require("../controllers/publisher.controllers");

router.post("/", postPublisherController);
router.get("/", getAllPublisherController);
router.get("/:id", getPublisherByIdController);
router.delete("/:id", deletePublisherControllerById);
router.put("/:id", updatePublisherControllerById);

module.exports = router;
