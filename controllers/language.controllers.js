const languageService = require("../services/language.service");

async function getAllLanguageController(req, res) {
  try {
    const language = await languageService.getAll();
    res.send({
      status: "success",
      message: "language berhasil diambil!",
      data: {
        language,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postLanguageController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const languageData = await languageService.create(data);

    res.send({
      status: "success",
      message: "language berhasil dibuat!",
      data: {
        language: languageData,
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

async function deleteLanguageControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await languageService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "language berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `language dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updateLanguageControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await languageService.update(id, data);

    if (result === 1) {
      const updatedLanguage = await languageService.getById(id);
      res.send({
        status: "success",
        message: "language berhasil diupdate!",
        data: {
          language: updatedLanguage,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `language dengan ID ${id} tidak ditemukan`,
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
  getAllLanguageController,
  postLanguageController,
  deleteLanguageControllerById,
  updateLanguageControllerById,
};
