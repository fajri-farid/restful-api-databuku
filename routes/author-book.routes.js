const express = require("express");
const router = express.Router();
const {
  getAllAuthorBookController,
  postAuthorBookController,
  deleteAuthorBookControllerById,
  updateAuthorBookControllerById,
} = require("../controllers/author-book.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");

router.post("/", checkAuth, checkAuthAdmin, postAuthorBookController);
router.get("/", checkAuth, checkAuthAdmin, getAllAuthorBookController);
router.delete(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  deleteAuthorBookControllerById
);
router.put("/:id", checkAuth, checkAuthAdmin, updateAuthorBookControllerById);

module.exports = router;
