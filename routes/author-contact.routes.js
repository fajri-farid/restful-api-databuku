const express = require("express");
const router = express.Router();
const {
  getAllAuthorContactController,
  postAuthorContactController,
  deleteAuthorContactControllerById,
  updateAuthorContactControllerById,
} = require("../controllers/author-contact.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuthAdmin, postAuthorContactController);
router.get("/", getAllAuthorContactController);
router.delete("/:id", checkAuthAdmin, deleteAuthorContactControllerById);
router.put("/:id", checkAuthAdmin, updateAuthorContactControllerById);

module.exports = router;
