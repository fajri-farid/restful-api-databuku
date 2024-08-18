const tagService = require("../services/tags.service");

async function getAllTagController(req, res) {
  try {
    const tag = await tagService.getAll();
    res.send({
      status: "success",
      message: "tag berhasil diambil!",
      data: {
        tag,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postTagController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const tagData = await tagService.create(data);

    res.send({
      status: "success",
      message: "tag berhasil dibuat!",
      data: {
        tag: tagData,
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

async function deleteTagControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await tagService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "tag berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `tag dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updateTagControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await tagService.update(id, data);

    if (result === 1) {
      const updatedTag = await tagService.getById(id);
      res.send({
        status: "success",
        message: "tag berhasil diupdate!",
        data: {
          tag: updatedTag,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `tag dengan ID ${id} tidak ditemukan`,
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
  getAllTagController,
  postTagController,
  deleteTagControllerById,
  updateTagControllerById,
};
