const express = require("express");
const router = express.Router();
const {
  getAllAuthorBookController,
  postAuthorBookController,
  deleteAuthorBookControllerById,
  updateAuthorBookControllerById,
} = require("../controllers/author-book.controllers");
const checkAuth = require("./../middleware/login/auth-login.middleware");

router.post("/", postAuthorBookController);
router.get("/", checkAuth, getAllAuthorBookController);
router.delete("/:id", deleteAuthorBookControllerById);
router.put("/:id", updateAuthorBookControllerById);

module.exports = router;
