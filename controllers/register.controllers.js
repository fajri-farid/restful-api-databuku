const userService = require("../services/user.service");

async function registerUserController(req, res) {
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

module.exports = {
  registerUserController,
};
