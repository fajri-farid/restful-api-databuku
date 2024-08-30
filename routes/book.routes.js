const express = require("express");
const router = express.Router();
const {
  createBookController,
  getAllBooksController,
  getBookByIdController,
  updateBookController,
  deleteBookController,
} = require("../controllers/book.controllers.js");
const {
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuthAdmin, createBookController);
router.get("/", getAllBooksController);
router.get("/:id", getBookByIdController);
router.put("/:id", checkAuthAdmin, updateBookController);
router.delete("/:id", checkAuthAdmin, deleteBookController);

module.exports = router;
