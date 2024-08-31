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

router.post("/", checkAuth, checkAuthAdmin, postAuthorContactController);
router.get("/", getAllAuthorContactController);
router.delete(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  deleteAuthorContactControllerById
);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  updateAuthorContactControllerById
);

module.exports = router;
