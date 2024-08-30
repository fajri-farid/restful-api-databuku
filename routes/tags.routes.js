const express = require("express");
const router = express.Router();
const {
  getAllTagController,
  postTagController,
  deleteTagControllerById,
  updateTagControllerById,
} = require("../controllers/tags.controllers");
const {
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuthAdmin, postTagController);
router.get("/", getAllTagController);
router.delete("/:id", checkAuthAdmin, deleteTagControllerById);
router.put("/:id", checkAuthAdmin, updateTagControllerById);

module.exports = router;
