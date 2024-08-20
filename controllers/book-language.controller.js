const bookLanguageService = require("../services/book-language.service");

async function getAllBookLanguageController(req, res) {
  try {
    const bookLanguage = await bookLanguageService.getAll();
    res.send({
      status: "success",
      message: "bookLanguage berhasil diambil!",
      data: {
        bookLanguage,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postBookLanguageController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const bookLanguageData = await bookLanguageService.create(data);

    res.send({
      status: "success",
      message: "bookLanguage berhasil dibuat!",
      data: {
        bookLanguage: bookLanguageData,
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

async function deleteBookLanguageControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await bookLanguageService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "bookLanguage berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `bookLanguage dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updateBookLanguageControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await bookLanguageService.update(id, data);

    if (result === 1) {
      const updatedBookLanguage = await bookLanguageService.getById(id);
      res.send({
        status: "success",
        message: "bookLanguage berhasil diupdate!",
        data: {
          bookLanguage: updatedBookLanguage,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `bookLanguage dengan ID ${id} tidak ditemukan`,
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
  getAllBookLanguageController,
  postBookLanguageController,
  deleteBookLanguageControllerById,
  updateBookLanguageControllerById,
};
