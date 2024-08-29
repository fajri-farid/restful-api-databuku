const express = require("express");
const router = express.Router();
const {
  loginUserController,
  getUserController,
} = require("../controllers/login.controllers");

router.post("/", loginUserController);
// router.get("/", getUserController);
router.get("/", (req, res) => {
  return req.session.user
    ? res.status(200).send(req.session.user)
    : res.status(401).send({ msg: "not authenticated" });
});

module.exports = router;
