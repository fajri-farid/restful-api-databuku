const userService = require("../services/user.service");
const jwt = require("jsonwebtoken");

// async function getUserController(req, res) {
//   // Cek apakah user sudah login
//   if (req.session.user) {
//     console.log("User Session:", req.session.user);
//     res.status(200).send({
//       msg: "User is logged in",
//       user: req.session.user,
//     });
//   } else {
//     res.status(401).send({ msg: "User not authenticated" });
//   }
// }

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
      },
      process.env.SECRET,
      { expiresIn: "1h" } // Atur waktu kedaluwarsa token
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
