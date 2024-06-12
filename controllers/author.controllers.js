const authorService = require("../services/author.service");

// Controller untuk mengambil semua penulis
async function getAllAuthorController(req, res) {
  try {
    const authors = await authorService.getAll();
    res.send({
      status: "success",
      message: "Authors berhasil diambil!",
      data: {
        authors,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

// Controller untuk membuat penulis baru
async function postAuthorController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const authorData = await authorService.create(data);

    res.send({
      status: "success",
      message: "Author berhasil dibuat!",
      data: {
        author: authorData,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

module.exports = {
  getAllAuthorController,
  postAuthorController,
};
