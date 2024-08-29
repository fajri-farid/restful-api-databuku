function checkAuth(req, res, next) {
  if (req.session && req.session.user) {
    next(); // User sudah login, lanjutkan ke route berikutnya
  } else {
    res.status(401).send({ msg: "not authenticated" }); // User belum login
  }
}

function checkAuthAdmin(req, res, next) {
  if (
    req.session &&
    req.session.user &&
    req.session.user.role_id == "hzxord9rxewld4ys3oihbnm8"
  ) {
    next(); // User sudah login, lanjutkan ke route berikutnya
  } else {
    res.status(403).send({ msg: "forbidden, admin access required" }); // User tidak memiliki akses admin
  }
}

module.exports = { checkAuth, checkAuthAdmin };
