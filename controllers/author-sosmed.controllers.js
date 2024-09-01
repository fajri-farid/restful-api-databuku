const authorSosmedService = require("../services/author-sosmed.service");

async function getAllAuthorSosmedController(req, res) {
  try {
    const authorSosmed = await authorSosmedService.getAll();
    res.send({
      status: "success",
      message: "Author Sosmed berhasil diambil!",
      data: {
        authorSosmed,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postAuthorSosmedController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const authorSosmedData = await authorSosmedService.create(data);

    res.send({
      status: "success",
      message: "Author Sosmed berhasil dibuat!",
      data: {
        authorSosmed: authorSosmedData,
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

async function deleteAuthorSosmedControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await authorSosmedService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "Author Sosmed berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `Author Sosmed dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updateAuthorSosmedControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await authorSosmedService.update(id, data);

    if (result === 1) {
      const updatedAuthorSosmed = await authorSosmedService.getById(id);
      res.send({
        status: "success",
        message: "Author Sosmed berhasil diupdate!",
        data: {
          authorSosmed: updatedAuthorSosmed,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `Author Sosmed dengan ID ${id} tidak ditemukan`,
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
  getAllAuthorSosmedController,
  postAuthorSosmedController,
  deleteAuthorSosmedControllerById,
  updateAuthorSosmedControllerById,
};
