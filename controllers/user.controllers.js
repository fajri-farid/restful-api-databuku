const userService = require("../services/user.service");

async function getAllUserController(req, res) {
  try {
    const user = await userService.getAll();
    res.send({
      status: "success",
      message: "user berhasil diambil!",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function getUserByIdController(req, res) {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);

    if (user) {
      res.send({
        status: "success",
        message: "user berhasil diambil!",
        data: {
          user,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `user dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postUserController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const userData = await userService.create(data);

    res.send({
      status: "success",
      message: "user berhasil dibuat!",
      data: {
        user: userData,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
      details: error.message,
    });
  }
}

async function deleteUserControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await userService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "user berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `user dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updateUserControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await userService.update(id, data);

    if (result === 1) {
      const updatedUser = await userService.getById(id);
      res.send({
        status: "success",
        message: "Author berhasil diupdate!",
        data: {
          user: updatedUser,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `user dengan ID ${id} tidak ditemukan`,
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
  getAllUserController,
  postUserController,
  deleteUserControllerById,
  updateUserControllerById,
  getUserByIdController,
};
