const express = require("express");
const router = express.Router();
const {
  registerUserController,
} = require("../controllers/register.controllers");

router.post("/", registerUserController);

module.exports = router;
