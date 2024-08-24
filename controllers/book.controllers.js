const bookService = require("../services/book.service");

async function createBookController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const bookData = await bookService.create(data);

    res.send({
      status: "success",
      message: "book berhasil dibuat!",
      data: {
        book: bookData,
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

async function getAllBooksController(req, res) {
  try {
    const books = await bookService.getAll();
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
    const book = await bookService.getById(id);

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
      const updatedBook = await bookService.getById(id);
      res.send({
        status: "success",
        message: "Book was updated successfully.",
        data: {
          book: updatedBook,
        },
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
      message: `Error updating Book with id=${id}`,
    });
  }
}

async function deleteBookController(req, res) {
  try {
    const { id } = req.params;

    const result = await bookService.deleteById(id);

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
