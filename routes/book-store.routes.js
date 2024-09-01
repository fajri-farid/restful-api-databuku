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
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");

router.post("/", checkAuth, checkAuthAdmin, postBookStoreController);
router.get("/", getAllBookStoreController);
router.get("/:id", getBookStoreByIdController);
router.put("/:id", checkAuth, checkAuthAdmin, updateBookStoreController);
router.delete("/:id", checkAuth, checkAuthAdmin, deleteBookStoreController);

module.exports = router;
