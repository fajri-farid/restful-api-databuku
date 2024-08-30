const express = require("express");
const router = express.Router();
const {
  getAllLanguageController,
  postLanguageController,
  deleteLanguageControllerById,
  updateLanguageControllerById,
} = require("../controllers/language.controllers");
const {
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuthAdmin, postLanguageController);
router.get("/", getAllLanguageController);
router.delete("/:id", checkAuthAdmin, deleteLanguageControllerById);
router.put("/:id", checkAuthAdmin, updateLanguageControllerById);

module.exports = router;
