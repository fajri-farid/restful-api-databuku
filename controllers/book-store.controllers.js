const bookStoreService = require("../services/book-store.service");

async function getAllBookStoreController(req, res) {
  try {
    const bookStore = await bookStoreService.getAll();
    res.send({
      status: "success",
      message: "bookStore berhasil diambil!",
      data: {
        bookStore,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function getBookStoreByIdController(req, res) {
  try {
    const { id } = req.params;
    const bookStore = await bookStoreService.getById(id);

    if (bookStore) {
      res.send({
        status: "success",
        message: "bookStore berhasil diambil!",
        data: {
          bookStore,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `bookStore dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postBookStoreController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const bookStoreData = await bookStoreService.create(data);

    res.send({
      status: "success",
      message: "bookStore berhasil dibuat!",
      data: {
        bookStore: bookStoreData,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function deleteBookStoreController(req, res) {
  try {
    const { id } = req.params;

    const result = await bookStoreService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "bookStore berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `bookStore dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}
async function updateBookStoreController(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await bookStoreService.update(id, data);

    if (result === 1) {
      const updatedBookStore = await bookStoreService.getById(id);
      res.send({
        status: "success",
        message: "bookStore berhasil diupdate!",
        data: {
          book: updatedBookStore,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `bookStore dengan ID ${id} tidak ditemukan`,
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
  getAllBookStoreController,
  postBookStoreController,
  deleteBookStoreController,
  updateBookStoreController,
  getBookStoreByIdController,
};
