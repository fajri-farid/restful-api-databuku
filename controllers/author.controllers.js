const authorService = require("../services/author.service");

async function postAuthorController(req, res) {
  try {
    // Pastikan payload ada di body
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

module.exports = {
  postAuthorController,
};
