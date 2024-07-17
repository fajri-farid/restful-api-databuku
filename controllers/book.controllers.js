const bookService = require("../services/book.service");

async function createBookController(req, res) {
  try {
    const data = req.body;

    if (!data.title || !data.releaseYear || !data.synopsis || !data.authorId) {
      return res.status(400).send({
        status: "error",
        message: "Content can not be empty!",
      });
    }

    const bookData = await bookService.create(data);

    res.send({
      status: "success",
      message: "Book berhasil dibuat!",
      data: {
        book: bookData,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Some error occurred while creating the Book.",
    });
  }
}

async function getAllBooksController(req, res) {
  try {
    const books = await bookService.findAll();
    res.send({
      status: "success",
      message: "Books berhasil diambil!",
      data: {
        books,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Some error occurred while retrieving books.",
    });
  }
}

async function getBookByIdController(req, res) {
  try {
    const { id } = req.params;
    const book = await bookService.findOne(id);

    if (book) {
      res.send({
        status: "success",
        message: "Book berhasil diambil!",
        data: {
          book,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `Cannot find Book with id=${id}.`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Error retrieving Book with id=" + id,
    });
  }
}

async function updateBookController(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    const result = await bookService.update(id, data);

    if (result == 1) {
      res.send({
        status: "success",
        message: "Book was updated successfully.",
      });
    } else {
      res.send({
        status: "error",
        message: `Cannot update Book with id=${id}. Maybe Book was not found or req.body is empty!`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Error updating Book with id=" + id,
    });
  }
}

async function deleteBookController(req, res) {
  try {
    const { id } = req.params;

    const result = await bookService.delete(id);

    if (result == 1) {
      res.send({
        status: "success",
        message: "Book was deleted successfully!",
      });
    } else {
      res.send({
        status: "error",
        message: `Cannot delete Book with id=${id}. Maybe Book was not found!`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Could not delete Book with id=" + id,
    });
  }
}

module.exports = {
  createBookController,
  getAllBooksController,
  getBookByIdController,
  updateBookController,
  deleteBookController,
};
