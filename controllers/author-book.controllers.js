const authorBookService = require("../services/author-book.service");

async function getAllAuthorBookController(req, res) {
  try {
    const authorBook = await authorBookService.getAll();
    res.send({
      status: "success",
      message: "authorBook berhasil diambil!",
      data: {
        authorBook,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postAuthorBookController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const authorBookData = await authorBookService.create(data);

    res.send({
      status: "success",
      message: "authorBook berhasil dibuat!",
      data: {
        authorBook: authorBookData,
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

async function deleteAuthorBookControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await authorBookService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "authorBook berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `authorBook dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updateAuthorBookControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await authorBookService.update(id, data);

    if (result === 1) {
      const updatedauthorBook = await authorBookService.getById(id);
      res.send({
        status: "success",
        message: "Author berhasil diupdate!",
        data: {
          authorBook: updatedauthorBook,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `authorBook dengan ID ${id} tidak ditemukan`,
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
  getAllAuthorBookController,
  postAuthorBookController,
  deleteAuthorBookControllerById,
  updateAuthorBookControllerById,
};
