const express = require("express");
const router = express.Router();
const {
  createBookController,
  getAllBooksController,
  getBookByIdController,
  updateBookController,
  deleteBookController,
} = require("../controllers/book.controllers.js");

router.post("/", createBookController);
router.get("/", getAllBooksController);
router.get("/:id", getBookByIdController);
router.put("/:id", updateBookController);
router.delete("/:id", deleteBookController);

module.exports = router;
