const express = require("express");
const router = express.Router();
const {
  getAllCurrencyController,
  postCurrencyController,
  deleteCurrencyControllerById,
  updateCurrencyControllerById,
} = require("../controllers/currency.controllers");

router.post("/", postCurrencyController);
router.get("/", getAllCurrencyController);
router.delete("/:id", deleteCurrencyControllerById);
router.put("/:id", updateCurrencyControllerById);

module.exports = router;
