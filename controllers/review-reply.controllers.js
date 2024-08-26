const reviewReplyService = require("../services/review-reply.service");

async function getAllReviewReplyController(req, res) {
  try {
    const reviewReply = await reviewReplyService.getAll();
    res.send({
      status: "success",
      message: "reviewReply berhasil diambil!",
      data: {
        reviewReply,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postReviewReplyController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const reviewReplyData = await reviewReplyService.create(data);

    res.send({
      status: "success",
      message: "reviewReply berhasil dibuat!",
      data: {
        reviewReply: reviewReplyData,
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

async function deleteReviewReplyControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await reviewReplyService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "reviewReply berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `reviewReply dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updateReviewReplyControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await reviewReplyService.update(id, data);

    if (result === 1) {
      const updatedreviewReply = await reviewReplyService.getById(id);
      res.send({
        status: "success",
        message: "Author berhasil diupdate!",
        data: {
          reviewReply: updatedreviewReply,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `reviewReply dengan ID ${id} tidak ditemukan`,
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
  getAllReviewReplyController,
  postReviewReplyController,
  deleteReviewReplyControllerById,
  updateReviewReplyControllerById,
};
