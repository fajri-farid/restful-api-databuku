const express = require("express");
const router = express.Router();
const {
  getAllCurrencyController,
  postCurrencyController,
  deleteCurrencyControllerById,
  updateCurrencyControllerById,
} = require("../controllers/currency.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuth, checkAuthAdmin, postCurrencyController);
router.get("/", getAllCurrencyController);
router.delete("/:id", checkAuth, checkAuthAdmin, deleteCurrencyControllerById);
router.put("/:id", checkAuth, checkAuthAdmin, updateCurrencyControllerById);

module.exports = router;
