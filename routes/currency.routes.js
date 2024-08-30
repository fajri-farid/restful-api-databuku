const express = require("express");
const router = express.Router();
const {
  getAllCurrencyController,
  postCurrencyController,
  deleteCurrencyControllerById,
  updateCurrencyControllerById,
} = require("../controllers/currency.controllers");
const {
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuthAdmin, postCurrencyController);
router.get("/", getAllCurrencyController);
router.delete("/:id", checkAuthAdmin, deleteCurrencyControllerById);
router.put("/:id", checkAuthAdmin, updateCurrencyControllerById);

module.exports = router;
