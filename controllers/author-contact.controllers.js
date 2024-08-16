const authorContactService = require("../services/author-contact.service");

async function getAllAuthorContactController(req, res) {
  try {
    const authorContact = await authorContactService.getAll();
    res.send({
      status: "success",
      message: "authorContact berhasil diambil!",
      data: {
        authorContact,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postAuthorContactController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const authorContactData = await authorContactService.create(data);

    res.send({
      status: "success",
      message: "authorContact berhasil dibuat!",
      data: {
        authorContact: authorContactData,
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

async function deleteAuthorContactControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await authorContactService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "authorContact berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `authorContact dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updateAuthorContactControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await authorContactService.update(id, data);

    if (result === 1) {
      const updatedauthorContact = await authorContactService.getById(id);
      res.send({
        status: "success",
        message: "Author berhasil diupdate!",
        data: {
          authorContact: updatedauthorContact,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `authorContact dengan ID ${id} tidak ditemukan`,
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
  getAllAuthorContactController,
  postAuthorContactController,
  deleteAuthorContactControllerById,
  updateAuthorContactControllerById,
};
