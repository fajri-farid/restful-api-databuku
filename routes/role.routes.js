const express = require("express");
const router = express.Router();
const {
  getAllRoleController,
  postRoleController,
  deleteRoleControllerById,
  updateRoleControllerById,
} = require("../controllers/role.controllers");
const {
  checkAuth,
  checkAuthAdmin,
} = require("./../middleware/login/auth-login.middleware");

router.post("/", checkAuth, checkAuthAdmin, postRoleController);
router.get("/", getAllRoleController);
router.delete("/:id", checkAuth, checkAuthAdmin, deleteRoleControllerById);
router.put("/:id", checkAuth, checkAuthAdmin, updateRoleControllerById);

module.exports = router;
