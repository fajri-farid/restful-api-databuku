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
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/auth/auth-login.middleware");

router.post("/", checkAuth, checkAuthAdmin, postStoreController);
router.get("/", getAllStoreController);
router.get("/:id", getStoreByIdController);
router.delete("/:id", checkAuth, checkAuthAdmin, deleteStoreControllerById);
router.put("/:id", checkAuth, checkAuthAdmin, updateStoreControllerById);

module.exports = router;
