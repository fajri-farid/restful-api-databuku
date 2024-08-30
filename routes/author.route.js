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
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuthAdmin, postAuthorController);
router.get("/", getAllAuthorController);
router.get("/:id", getAuthorByIdController);
router.delete("/:id", checkAuthAdmin, deleteAuthorController);
router.put("/:id", checkAuthAdmin, updateAuthorController);

module.exports = router;
