const authorService = require("../services/author.service");

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

async function deleteAuthorController(req, res) {
  try {
    const { id } = req.params;

    const result = await authorService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "Author berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `Author dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}
async function updateAuthorController(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await authorService.update(id, data);

    if (result === 1) {
      res.send({
        status: "success",
        message: "Author berhasil diupdate!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `Author dengan ID ${id} tidak ditemukan`,
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
  getAllAuthorController,
  postAuthorController,
  deleteAuthorController,
  updateAuthorController,
};
