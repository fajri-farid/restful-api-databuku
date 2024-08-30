const express = require("express");
const router = express.Router();
const {
  getAllBookTagsController,
  postBookTagsController,
  deleteBookTagsControllerById,
  updateBookTagsControllerById,
} = require("../controllers/book-tags.controllers");
const {
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuthAdmin, postBookTagsController);
router.get("/", getAllBookTagsController);
router.delete("/:id", checkAuthAdmin, deleteBookTagsControllerById);
router.put("/:id", checkAuthAdmin, updateBookTagsControllerById);

module.exports = router;
