const express = require("express");
const router = express.Router();
const {
  getAllPriceController,
  getPriceByIdController,
  postPriceController,
  deletePriceController,
  updatePriceController,
} = require("../controllers/price.controllers");

router.post("/", postPriceController);
router.get("/", getAllPriceController);
router.get("/:id", getPriceByIdController);
router.delete("/:id", deletePriceController);
router.put("/:id", updatePriceController);

module.exports = router;
