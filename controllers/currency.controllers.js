const currecyService = require("../services/currency.service");

async function getAllCurrencyController(req, res) {
  try {
    const currency = await currecyService.getAll();
    res.send({
      status: "success",
      message: "Currency berhasil diambil!",
      data: {
        currency,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}
  
async function postCurrencyController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const currencyData = await currecyService.create(data);

    res.send({
      status: "success",
      message: "Currency berhasil dibuat!",
      data: {
        role: currencyData,
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

async function deleteCurrencyControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await currecyService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "currency berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `Currency dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updateCurrencyControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await currecyService.update(id, data);

    if (result === 1) {
      const updatedCurrency = await currecyService.getById(id);
      res.send({
        status: "success",
        message: "Author berhasil diupdate!",
        data: {
          currency: updatedCurrency,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `Currency dengan ID ${id} tidak ditemukan`,
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
  getAllCurrencyController,
  postCurrencyController,
  deleteCurrencyControllerById,
  updateCurrencyControllerById,
};
