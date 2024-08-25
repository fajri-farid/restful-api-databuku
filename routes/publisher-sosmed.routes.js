const express = require("express");
const router = express.Router();
const {
  getAllPublisherSosmedController,
  postPublisherSosmedController,
  deletePublisherSosmedControllerById,
  updatePublisherSosmedControllerById,
} = require("../controllers/publisher-sosmed.controllers");

router.post("/", postPublisherSosmedController);
router.get("/", getAllPublisherSosmedController);
router.delete("/:id", deletePublisherSosmedControllerById);
router.put("/:id", updatePublisherSosmedControllerById);

module.exports = router;
