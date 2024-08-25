const publisherSosmedService = require("../services/publisher-sosmed.service");

async function getAllPublisherSosmedController(req, res) {
  try {
    const publisherSosmed = await publisherSosmedService.getAll();
    res.send({
      status: "success",
      message: "Publisher Sosmed berhasil diambil!",
      data: {
        publisherSosmed,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postPublisherSosmedController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const publisherSosmedData = await publisherSosmedService.create(data);

    res.send({
      status: "success",
      message: "Publisher Sosmed berhasil dibuat!",
      data: {
        publisherSosmed: publisherSosmedData,
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

async function deletePublisherSosmedControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await publisherSosmedService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "Publisher Sosmed berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `Publisher Sosmed dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updatePublisherSosmedControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await publisherSosmedService.update(id, data);

    if (result === 1) {
      const updatedPublisherSosmed = await publisherSosmedService.getById(id);
      res.send({
        status: "success",
        message: "Publisher Sosmed berhasil diupdate!",
        data: {
          publisherSosmed: updatedPublisherSosmed,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `Publisher Sosmed dengan ID ${id} tidak ditemukan`,
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
  getAllPublisherSosmedController,
  postPublisherSosmedController,
  deletePublisherSosmedControllerById,
  updatePublisherSosmedControllerById,
};
