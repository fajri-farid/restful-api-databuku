const priceService = require("../services/price.service");

async function getAllPriceController(req, res) {
  try {
    const price = await priceService.getAll();
    res.send({
      status: "success",
      message: "price berhasil diambil!",
      data: {
        price,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function getPriceByIdController(req, res) {
  try {
    const { id } = req.params;
    const price = await priceService.getById(id);

    if (price) {
      res.send({
        status: "success",
        message: "price berhasil diambil!",
        data: {
          price,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `price dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postPriceController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const priceData = await priceService.create(data);

    res.send({
      status: "success",
      message: "price berhasil dibuat!",
      data: {
        price: priceData,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function deletePriceController(req, res) {
  try {
    const { id } = req.params;

    const result = await priceService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "price berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `price dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updatePriceController(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await priceService.update(id, data);

    if (result === 1) {
      const updatedPrice = await priceService.getById(id);
      res.send({
        status: "success",
        message: "price berhasil diupdate!",
        data: {
          book: updatedPrice,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `price dengan ID ${id} tidak ditemukan`,
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
  getAllPriceController,
  getPriceByIdController,
  postPriceController,
  deletePriceController,
  updatePriceController,
};
