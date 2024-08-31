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
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuth, checkAuthAdmin, postPublisherController);
router.get("/", getAllPublisherController);
router.get("/:id", getPublisherByIdController);
router.delete("/:id", checkAuth, checkAuthAdmin, deletePublisherControllerById);
router.put("/:id", checkAuth, checkAuthAdmin, updatePublisherControllerById);

module.exports = router;
