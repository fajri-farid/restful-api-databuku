const express = require("express");
const router = express.Router();
const {
  getAllPublisherSosmedController,
  postPublisherSosmedController,
  deletePublisherSosmedControllerById,
  updatePublisherSosmedControllerById,
} = require("../controllers/publisher-sosmed.controllers");
const {
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuthAdmin, postPublisherSosmedController);
router.get("/", getAllPublisherSosmedController);
router.delete("/:id", checkAuthAdmin, deletePublisherSosmedControllerById);
router.put("/:id", checkAuthAdmin, updatePublisherSosmedControllerById);

module.exports = router;
