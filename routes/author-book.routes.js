const express = require("express");
const router = express.Router();
const {
  getAllAuthorBookController,
  postAuthorBookController,
  deleteAuthorBookControllerById,
  updateAuthorBookControllerById,
} = require("../controllers/author-book.controllers");

router.post("/", postAuthorBookController);
router.get("/", getAllAuthorBookController);
router.delete("/:id", deleteAuthorBookControllerById);
router.put("/:id", updateAuthorBookControllerById);

module.exports = router;
