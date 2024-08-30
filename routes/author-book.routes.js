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
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuthAdmin, postAuthorBookController);
router.get("/", getAllAuthorBookController);
router.delete("/:id", checkAuthAdmin, deleteAuthorBookControllerById);
router.put("/:id", checkAuthAdmin, updateAuthorBookControllerById);

module.exports = router;
