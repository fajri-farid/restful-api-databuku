const express = require("express");
const router = express.Router();
const { postAuthorController } = require("../controllers/author.controllers");

router.post("/", postAuthorController);

module.exports = router;
