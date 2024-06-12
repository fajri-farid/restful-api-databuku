const express = require("express");
const router = express.Router();
const {
  postAuthorController,
  getAllAuthorController,
} = require("../controllers/author.controllers");

router.post("/", postAuthorController);
router.get("/", getAllAuthorController);

module.exports = router;
