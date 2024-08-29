function checkAuth(req, res, next) {
  if (req.session && req.session.user) {
    next(); // User sudah login, lanjutkan ke route berikutnya
  } else {
    res.status(401).send({ msg: "not authenticated" }); // User belum login
  }
}

module.exports = checkAuth;
