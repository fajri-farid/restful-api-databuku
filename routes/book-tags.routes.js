const express = require("express");
const router = express.Router();
const {
  getAllBookTagsController,
  postBookTagsController,
  deleteBookTagsControllerById,
  updateBookTagsControllerById,
} = require("../controllers/book-tags.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");

router.post("/", checkAuth, checkAuthAdmin, postBookTagsController);
router.get("/", getAllBookTagsController);
router.delete("/:id", checkAuth, checkAuthAdmin, deleteBookTagsControllerById);
router.put("/:id", checkAuth, checkAuthAdmin, updateBookTagsControllerById);

module.exports = router;
