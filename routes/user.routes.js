const express = require("express");
const router = express.Router();
const {
  getAllUserController,
  postUserController,
  deleteUserControllerById,
  updateUserControllerById,
  getUserByIdController,
} = require("../controllers/user.controllers");

router.post("/", postUserController);
router.get("/", getAllUserController);
router.get("/:id", getUserByIdController);
router.delete("/:id", deleteUserControllerById);
router.put("/:id", updateUserControllerById);

module.exports = router;
