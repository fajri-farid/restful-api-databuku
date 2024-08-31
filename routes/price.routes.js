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
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuth, checkAuthAdmin, postPriceController);
router.get("/", getAllPriceController);
router.get("/:id", getPriceByIdController);
router.delete("/:id", checkAuth, checkAuthAdmin, deletePriceController);
router.put("/:id", checkAuth, checkAuthAdmin, updatePriceController);

module.exports = router;
