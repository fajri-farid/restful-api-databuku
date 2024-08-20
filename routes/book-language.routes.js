const express = require("express");
const router = express.Router();
const {
  getAllBookLanguageController,
  postBookLanguageController,
  deleteBookLanguageControllerById,
  updateBookLanguageControllerById,
} = require("../controllers/book-language.controller");

router.post("/", postBookLanguageController);
router.get("/", getAllBookLanguageController);
router.delete("/:id", deleteBookLanguageControllerById);
router.put("/:id", updateBookLanguageControllerById);

module.exports = router;
