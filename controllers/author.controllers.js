const authorService = require("../services/author.service");

async function postAuthorController(req, res) {
  const data = req.payload;

  const authorData = await authorService.create(data);

  res.send({
    status: "success",
    message: "Author berhasil dibuat!",
    data: {
      author: authorData,
    },
  });
}

module.export = {
  postAuthorController,
};
