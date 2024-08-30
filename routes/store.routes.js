const express = require("express");
const router = express.Router();
const {
  getAllStoreController,
  getStoreByIdController,
  postStoreController,
  deleteStoreControllerById,
  updateStoreControllerById,
} = require("../controllers/store.controllers");
const {
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuthAdmin, postStoreController);
router.get("/", getAllStoreController);
router.get("/:id", getStoreByIdController);
router.delete("/:id", checkAuthAdmin, deleteStoreControllerById);
router.put("/:id", checkAuthAdmin, updateStoreControllerById);

module.exports = router;
