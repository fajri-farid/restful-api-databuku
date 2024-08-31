const express = require("express");
const router = express.Router();
const {
  getAllPublisherSosmedController,
  postPublisherSosmedController,
  deletePublisherSosmedControllerById,
  updatePublisherSosmedControllerById,
} = require("../controllers/publisher-sosmed.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuth, checkAuthAdmin, postPublisherSosmedController);
router.get("/", getAllPublisherSosmedController);
router.delete(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  deletePublisherSosmedControllerById
);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  updatePublisherSosmedControllerById
);

module.exports = router;
