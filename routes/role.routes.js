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
const {
  createRoleValidationSchema,
  putRoleValidationSchema,
} = require("../middleware/validation/role.validation.middleware.js");
const { checkSchema } = require("express-validator");
const handleValidationErrors = require("../middleware/validationResult.middleware.js");

router.post(
  "/",
  checkAuth,
  checkAuthAdmin,
  checkSchema(createRoleValidationSchema),
  handleValidationErrors,
  postRoleController
);
router.get("/", getAllRoleController);
router.delete("/:id", checkAuth, checkAuthAdmin, deleteRoleControllerById);
router.put(
  "/:id",
  checkAuth,
  checkAuthAdmin,
  checkSchema(putRoleValidationSchema),
  handleValidationErrors,
  updateRoleControllerById
);

module.exports = router;
