const jwt = require("jsonwebtoken");

function checkAuth(req, res, next) {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).send({ msg: "Not authenticated" });
  }

  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) {
      return res.status(403).send({ msg: "Invalid token" });
    }

    req.user = user; // Simpan informasi user di request
    next(); // User sudah terautentikasi, lanjutkan ke route berikutnya
  });
}

function checkAuthAdmin(req, res, next) {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).send({ msg: "Not authenticated" });
  }

  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) {
      return res.status(403).send({ msg: "Invalid token" });
    }

    if (user.role_id === "hzxord9rxewld4ys3oihbnm8") {
      // Sesuaikan dengan role_id admin
      req.user = user;
      next(); // User adalah admin, lanjutkan ke route berikutnya
    } else {
      res.status(403).send({ msg: "Forbidden, admin access required" });
    }
  });
}

module.exports = { checkAuth, checkAuthAdmin };
