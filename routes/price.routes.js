const express = require("express");
const router = express.Router();
const {
  getAllPriceController,
  getPriceByIdController,
  postPriceController,
  deletePriceController,
  updatePriceController,
} = require("../controllers/price.controllers");
const {
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuthAdmin, postPriceController);
router.get("/", getAllPriceController);
router.get("/:id", getPriceByIdController);
router.delete("/:id", checkAuthAdmin, deletePriceController);
router.put("/:id", checkAuthAdmin, updatePriceController);

module.exports = router;
