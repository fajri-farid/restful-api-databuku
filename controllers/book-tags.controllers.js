const bookTagsService = require("../services/book-tags.service");

async function getAllBookTagsController(req, res) {
  try {
    const book_tags = await bookTagsService.getAll();
    res.send({
      status: "success",
      message: "BookTags berhasil diambil!",
      data: {
        book_tags,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postBookTagsController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const bookTagsData = await bookTagsService.create(data);

    res.send({
      status: "success",
      message: "BookTags berhasil dibuat!",
      data: {
        book_tags: bookTagsData,
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

async function deleteBookTagsControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await bookTagsService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "BookTags berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `BookTags dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updateBookTagsControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await bookTagsService.update(id, data);

    if (result === 1) {
      const updateBookTags = await bookTagsService.getById(id);
      res.send({
        status: "success",
        message: "BookTags berhasil diupdate!",
        data: {
          book_tags: updateBookTags,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `BookTags dengan ID ${id} tidak ditemukan`,
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
  getAllBookTagsController,
  postBookTagsController,
  deleteBookTagsControllerById,
  updateBookTagsControllerById,
};
