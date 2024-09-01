const storeService = require("../services/store.service");

async function getAllStoreController(req, res) {
  try {
    const store = await storeService.getAll();
    res.send({
      status: "success",
      message: "store berhasil diambil!",
      data: {
        store,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function getStoreByIdController(req, res) {
  try {
    const { id } = req.params;
    const store = await storeService.getById(id);

    if (store) {
      res.send({
        status: "success",
        message: "store berhasil diambil!",
        data: {
          store,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `store dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postStoreController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const storeData = await storeService.create(data);

    res.send({
      status: "success",
      message: "store berhasil dibuat!",
      data: {
        store: storeData,
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

async function deleteStoreControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await storeService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "store berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `store dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updateStoreControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await storeService.update(id, data);

    if (result === 1) {
      const updatedStore = await storeService.getById(id);
      res.send({
        status: "success",
        message: "store berhasil diupdate!",
        data: {
          store: updatedStore,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `store dengan ID ${id} tidak ditemukan`,
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
  getAllStoreController,
  getStoreByIdController,
  postStoreController,
  deleteStoreControllerById,
  updateStoreControllerById,
};
