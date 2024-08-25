const express = require("express");
const router = express.Router();
const {
  getAllTagController,
  postTagController,
  deleteTagControllerById,
  updateTagControllerById,
} = require("../controllers/tags.controllers");

router.post("/", postTagController);
router.get("/", getAllTagController);
router.delete("/:id", deleteTagControllerById);
router.put("/:id", updateTagControllerById);

module.exports = router;
