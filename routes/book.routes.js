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
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuth, checkAuthAdmin, createBookController);
router.get("/", getAllBooksController);
router.get("/:id", getBookByIdController);
router.put("/:id", checkAuth, checkAuthAdmin, updateBookController);
router.delete("/:id", checkAuth, checkAuthAdmin, deleteBookController);

module.exports = router;
