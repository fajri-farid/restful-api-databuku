const express = require("express");
const router = express.Router();
const {
  getAllAuthorSosmedController,
  postAuthorSosmedController,
  deleteAuthorSosmedControllerById,
  updateAuthorSosmedControllerById,
} = require("../controllers/author-sosmed.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");

router.post("/", checkAuth, checkAuthAdmin, postAuthorSosmedController);
router.get("/", getAllAuthorSosmedController);
router.delete(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  deleteAuthorSosmedControllerById
);
router.put("/:id", checkAuth, checkAuthAdmin, updateAuthorSosmedControllerById);

module.exports = router;
