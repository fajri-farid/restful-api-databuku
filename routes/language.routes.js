const express = require("express");
const router = express.Router();
const {
  getAllLanguageController,
  postLanguageController,
  deleteLanguageControllerById,
  updateLanguageControllerById,
} = require("../controllers/language.controllers");

router.post("/", postLanguageController);
router.get("/", getAllLanguageController);
router.delete("/:id", deleteLanguageControllerById);
router.put("/:id", updateLanguageControllerById);

module.exports = router;
