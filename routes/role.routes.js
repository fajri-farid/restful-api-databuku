const express = require("express");
const router = express.Router();
const {
  getAllRoleController,
  postRoleController,
  deleteRoleControllerById,
  updateRoleControllerById,
} = require("../controllers/role.controllers");

router.post("/", postRoleController);
router.get("/", getAllRoleController);
router.delete("/:id", deleteRoleControllerById);
router.put("/:id", updateRoleControllerById);

module.exports = router;
