const express = require("express");
const router = express.Router();
const {
  postAuthorController,
  getAllAuthorController,
  deleteAuthorController,
  updateAuthorController,
} = require("../controllers/author.controllers");

router.post("/", postAuthorController);
router.get("/", getAllAuthorController);
router.delete("/:id", deleteAuthorController);
router.put("/:id", updateAuthorController);

module.exports = router;
