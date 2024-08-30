const express = require("express");
const router = express.Router();
const {
  getAllBookStoreController,
  postBookStoreController,
  deleteBookStoreController,
  updateBookStoreController,
  getBookStoreByIdController,
} = require("../controllers/book-store.controllers");
const {
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuthAdmin, postBookStoreController);
router.get("/", getAllBookStoreController);
router.get("/:id", getBookStoreByIdController);
router.put("/:id", checkAuthAdmin, updateBookStoreController);
router.delete("/:id", checkAuthAdmin, deleteBookStoreController);

module.exports = router;
