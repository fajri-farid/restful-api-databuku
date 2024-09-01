const express = require("express");
const router = express.Router();
const {
  getAllLanguageController,
  postLanguageController,
  deleteLanguageControllerById,
  updateLanguageControllerById,
} = require("../controllers/language.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");

router.post("/", checkAuth, checkAuthAdmin, postLanguageController);
router.get("/", getAllLanguageController);
router.delete("/:id", checkAuth, checkAuthAdmin, deleteLanguageControllerById);
router.put("/:id", checkAuth, checkAuthAdmin, updateLanguageControllerById);

module.exports = router;
