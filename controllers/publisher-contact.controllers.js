const publisherContacts = require("../services/publisher-contact.service");

async function getAllPublisherContactsController(req, res) {
  try {
    const publisherContact = await publisherContacts.getAll();
    res.send({
      status: "success",
      message: "publisherContacts berhasil diambil!",
      data: {
        publisherContact,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postPublisherContactsController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const publisherContactData = await publisherContacts.create(data);

    res.send({
      status: "success",
      message: "publisherContacts berhasil dibuat!",
      data: {
        publisherContacts: publisherContactData,
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

async function deletePublisherContactsControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await publisherContacts.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "publisherContacts berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `publisherContacts dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updatePublisherContactsControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await publisherContacts.update(id, data);

    if (result === 1) {
      const updatedpublisherContact = await publisherContacts.getById(id);
      res.send({
        status: "success",
        message: "Author berhasil diupdate!",
        data: {
          publisherContacts: updatedpublisherContact,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `publisherContacts dengan ID ${id} tidak ditemukan`,
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
  getAllPublisherContactsController,
  postPublisherContactsController,
  deletePublisherContactsControllerById,
  updatePublisherContactsControllerById,
};
