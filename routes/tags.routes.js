const express = require("express");
const router = express.Router();
const {
  getAllTagController,
  postTagController,
  deleteTagControllerById,
  updateTagControllerById,
} = require("../controllers/tags.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuth, checkAuthAdmin, postTagController);
router.get("/", getAllTagController);
router.delete("/:id", checkAuth, checkAuthAdmin, deleteTagControllerById);
router.put("/:id", checkAuth, checkAuthAdmin, updateTagControllerById);

module.exports = router;
