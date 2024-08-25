const express = require("express");
const router = express.Router();
const {
  getAllBookTagsController,
  postBookTagsController,
  deleteBookTagsControllerById,
  updateBookTagsControllerById,
} = require("../controllers/book-tags.controllers");

router.post("/", postBookTagsController);
router.get("/", getAllBookTagsController);
router.delete("/:id", deleteBookTagsControllerById);
router.put("/:id", updateBookTagsControllerById);

module.exports = router;
