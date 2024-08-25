const reviewService = require("../services/review.service");

async function getAllReviewController(req, res) {
  try {
    const review = await reviewService.getAll();
    res.send({
      status: "success",
      message: "review berhasil diambil!",
      data: {
        review,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postReviewController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const reviewData = await reviewService.create(data);

    res.send({
      status: "success",
      message: "review berhasil dibuat!",
      data: {
        review: reviewData,
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

async function deleteReviewControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await reviewService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "review berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `review dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updateReviewControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await reviewService.update(id, data);

    if (result === 1) {
      const updatedreview = await reviewService.getById(id);
      res.send({
        status: "success",
        message: "Author berhasil diupdate!",
        data: {
          review: updatedreview,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `review dengan ID ${id} tidak ditemukan`,
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
  getAllReviewController,
  postReviewController,
  deleteReviewControllerById,
  updateReviewControllerById,
};
