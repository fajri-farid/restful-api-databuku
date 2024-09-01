const express = require("express");
const router = express.Router();
const {
  postAuthorController,
  getAllAuthorController,
  deleteAuthorController,
  updateAuthorController,
  getAuthorByIdController,
} = require("../controllers/author.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");

router.post("/", checkAuth, checkAuthAdmin, postAuthorController);
router.get("/", getAllAuthorController);
router.get("/:id", checkAuth, getAuthorByIdController);
router.delete("/:id", checkAuth, checkAuthAdmin, deleteAuthorController);
router.put("/:id", checkAuth, checkAuthAdmin, updateAuthorController);

module.exports = router;
