const userService = require("../services/user.service");
const jwt = require("jsonwebtoken");

async function loginUserController(req, res) {
  const { email, password } = req.body;

  try {
    // Cari user berdasarkan email
    const findUser = await userService.getByEmail(email);

    if (!findUser || findUser.password !== password) {
      return res.status(401).send({ msg: "Bad credentials" });
    }

    // Buat JWT
    const token = jwt.sign(
      {
        id: findUser.id,
        email: findUser.email,
        username: findUser.username,
        role_id: findUser.role_id,
      },
      process.env.SECRET,
      { expiresIn: "1h" } // Atur waktu kedaluwarsa token selama 1 jam
    );

    const response = {
      message: "User logged in successfully",
      token, // Kirim token JWT ke client
    };

    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send({ msg: "Internal Server Error" });
  }
}

module.exports = {
  loginUserController,
};
