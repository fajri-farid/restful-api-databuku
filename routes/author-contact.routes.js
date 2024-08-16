const express = require("express");
const router = express.Router();
const {
  getAllAuthorContactController,
  postAuthorContactController,
  deleteAuthorContactControllerById,
  updateAuthorContactControllerById,
} = require("../controllers/author-contact.controllers");

router.post("/", postAuthorContactController);
router.get("/", getAllAuthorContactController);
router.delete("/:id", deleteAuthorContactControllerById);
router.put("/:id", updateAuthorContactControllerById);

module.exports = router;
