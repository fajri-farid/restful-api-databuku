const express = require("express");
const router = express.Router();
const {
  postAuthorController,
  getAllAuthorController,
  deleteAuthorController,
  updateAuthorController,
  getAuthorByIdController,
} = require("../controllers/author.controllers");

router.post("/", postAuthorController);
router.get("/", getAllAuthorController);
router.get("/:id", getAuthorByIdController);
router.delete("/:id", deleteAuthorController);
router.put("/:id", updateAuthorController);

module.exports = router;
