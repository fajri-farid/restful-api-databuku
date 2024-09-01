async function checkEditOwnProfile(req, res, next) {
  try {
    // Ambil id user dari request params
    const { id } = req.params;

    // Ambil user dari request (dari middleware checkAuth)
    const currentUser = req.user;

    // Periksa apakah id dari user yang ingin diubah sesuai dengan id user yang login
    if (currentUser.id !== id) {
      return res.status(403).send({
        msg: "Forbidden, you can only edit your own profile",
      });
    }

    // Jika id cocok, lanjutkan ke middleware berikutnya
    next();
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function checkDeleteOwnProfile(req, res, next) {
  try {
    // Ambil id user dari request params
    const { id } = req.params;

    // Ambil user dari request (dari middleware checkAuth)
    const currentUser = req.user;

    // Periksa apakah id dari user yang ingin dihapus sesuai dengan id user yang login
    if (currentUser.id !== id) {
      return res.status(403).send({
        msg: "Forbidden, you can only delete your own profile",
      });
    }

    // Jika id cocok, lanjutkan ke middleware berikutnya
    next();
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

module.exports = { checkEditOwnProfile, checkDeleteOwnProfile };
