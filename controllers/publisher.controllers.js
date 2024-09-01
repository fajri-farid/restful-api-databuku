const publisherService = require("../services/publisher.service");

async function getAllPublisherController(req, res) {
  try {
    const publisher = await publisherService.getAll();
    res.send({
      status: "success",
      message: "publisher berhasil diambil!",
      data: {
        publisher,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function getPublisherByIdController(req, res) {
  try {
    const { id } = req.params;
    const publisher = await publisherService.getById(id);

    if (publisher) {
      res.send({
        status: "success",
        message: "publisher berhasil diambil!",
        data: {
          publisher,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `publisher dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postPublisherController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const publisherData = await publisherService.create(data);

    res.send({
      status: "success",
      message: "publisher berhasil dibuat!",
      data: {
        publisher: publisherData,
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

async function deletePublisherControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await publisherService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "publisher berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `publisher dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updatePublisherControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await publisherService.update(id, data);

    if (result === 1) {
      const updatedPublisher = await publisherService.getById(id);
      res.send({
        status: "success",
        message: "publisher berhasil diupdate!",
        data: {
          publisher: updatedPublisher,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `publisher dengan ID ${id} tidak ditemukan`,
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
  getAllPublisherController,
  getPublisherByIdController,
  postPublisherController,
  deletePublisherControllerById,
  updatePublisherControllerById,
};
