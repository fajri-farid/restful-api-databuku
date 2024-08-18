const express = require("express");
const router = express.Router();
const {
  getAllStoreController,
  getStoreByIdController,
  postStoreController,
  deleteStoreControllerById,
  updateStoreControllerById,
} = require("../controllers/store.controllers");

router.post("/", postStoreController);
router.get("/", getAllStoreController);
router.get("/:id", getStoreByIdController);
router.delete("/:id", deleteStoreControllerById);
router.put("/:id", updateStoreControllerById);

module.exports = router;
