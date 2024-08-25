const express = require("express");
const router = express.Router();
const {
  getAllAuthorSosmedController,
  postAuthorSosmedController,
  deleteAuthorSosmedControllerById,
  updateAuthorSosmedControllerById,
} = require("../controllers/author-sosmed.controllers");

router.post("/", postAuthorSosmedController);
router.get("/", getAllAuthorSosmedController);
router.delete("/:id", deleteAuthorSosmedControllerById);
router.put("/:id", updateAuthorSosmedControllerById);

module.exports = router;
