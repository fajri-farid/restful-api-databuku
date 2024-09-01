const express = require("express");
const router = express.Router();
const {
  getAllBookLanguageController,
  postBookLanguageController,
  deleteBookLanguageControllerById,
  updateBookLanguageControllerById,
} = require("../controllers/book-language.controller");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");

router.post("/", checkAuth, checkAuthAdmin, postBookLanguageController);
router.get("/", getAllBookLanguageController);
router.delete(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  deleteBookLanguageControllerById
);
router.put("/:id", checkAuth, checkAuthAdmin, updateBookLanguageControllerById);

module.exports = router;
