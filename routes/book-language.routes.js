const express = require("express");
const router = express.Router();
const {
  getAllBookLanguageController,
  postBookLanguageController,
  deleteBookLanguageControllerById,
  updateBookLanguageControllerById,
} = require("../controllers/book-language.controller");
const {
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuthAdmin, postBookLanguageController);
router.get("/", getAllBookLanguageController);
router.delete("/:id", checkAuthAdmin, deleteBookLanguageControllerById);
router.put("/:id", checkAuthAdmin, updateBookLanguageControllerById);

module.exports = router;
