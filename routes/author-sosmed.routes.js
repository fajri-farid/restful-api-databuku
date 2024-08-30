const express = require("express");
const router = express.Router();
const {
  getAllAuthorSosmedController,
  postAuthorSosmedController,
  deleteAuthorSosmedControllerById,
  updateAuthorSosmedControllerById,
} = require("../controllers/author-sosmed.controllers");
const {
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuthAdmin, postAuthorSosmedController);
router.get("/", getAllAuthorSosmedController);
router.delete("/:id", checkAuthAdmin, deleteAuthorSosmedControllerById);
router.put("/:id", checkAuthAdmin, updateAuthorSosmedControllerById);

module.exports = router;
