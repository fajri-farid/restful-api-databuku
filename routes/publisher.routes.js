const express = require("express");
const router = express.Router();
const {
  getAllPublisherController,
  getPublisherByIdController,
  postPublisherController,
  deletePublisherControllerById,
  updatePublisherControllerById,
} = require("../controllers/publisher.controllers");
const {
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuthAdmin, postPublisherController);
router.get("/", getAllPublisherController);
router.get("/:id", getPublisherByIdController);
router.delete("/:id", checkAuthAdmin, deletePublisherControllerById);
router.put("/:id", checkAuthAdmin, updatePublisherControllerById);

module.exports = router;
