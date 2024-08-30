const express = require("express");
const router = express.Router();
const {
  getAllRoleController,
  postRoleController,
  deleteRoleControllerById,
  updateRoleControllerById,
} = require("../controllers/role.controllers");
const {
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuthAdmin, postRoleController);
router.get("/", getAllRoleController);
router.delete("/:id", checkAuthAdmin, deleteRoleControllerById);
router.put("/:id", checkAuthAdmin, updateRoleControllerById);

module.exports = router;
