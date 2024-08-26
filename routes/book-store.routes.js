const express = require("express");
const router = express.Router();
const {
  getAllBookStoreController,
  postBookStoreController,
  deleteBookStoreController,
  updateBookStoreController,
  getBookStoreByIdController,
} = require("../controllers/book-store.controllers");

router.post("/", postBookStoreController);
router.get("/", getAllBookStoreController);
router.get("/:id", getBookStoreByIdController);
router.put("/:id", updateBookStoreController);
router.delete("/:id", deleteBookStoreController);

module.exports = router;
