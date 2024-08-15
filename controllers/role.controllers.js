const roleService = require("../services/role.service");

async function getAllRoleController(req, res) {
  try {
    const role = await roleService.getAll();
    res.send({
      status: "success",
      message: "Role berhasil diambil!",
      data: {
        role,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postRoleController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const roleData = await roleService.create(data);

    res.send({
      status: "success",
      message: "Role berhasil dibuat!",
      data: {
        role: roleData,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function deleteRoleControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await roleService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "Role berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `Role dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updateRoleControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await roleService.update(id, data);

    if (result === 1) {
      const updatedRole = await roleService.getById(id);
      res.send({
        status: "success",
        message: "Author berhasil diupdate!",
        data: {
          role: updatedRole,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `Role dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

module.exports = {
  getAllRoleController,
  postRoleController,
  deleteRoleControllerById,
  updateRoleControllerById,
};
