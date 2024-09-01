const reviewReplyLikeDislikeService = require("../services/review-reply-like-dislike.service");

async function getAllReviewReplyLikeDislikeController(req, res) {
  try {
    const reviewReplyLikeDislike = await reviewReplyLikeDislikeService.getAll();
    res.send({
      status: "success",
      message: "reviewReplyLikeDislike berhasil diambil!",
      data: {
        reviewReplyLikeDislike,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postReviewReplyLikeDislikeController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const reviewReplyLikeDislikeData =
      await reviewReplyLikeDislikeService.create(data);

    res.send({
      status: "success",
      message: "reviewReplyLikeDislike berhasil dibuat!",
      data: {
        reviewReplyLikeDislike: reviewReplyLikeDislikeData,
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

async function deleteReviewReplyLikeDislikeControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await reviewReplyLikeDislikeService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "reviewReplyLikeDislike berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `reviewReplyLikeDislike dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updateReviewReplyLikeDislikeControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await reviewReplyLikeDislikeService.update(id, data);

    if (result === 1) {
      const updatedReviewReplyLikeDislike =
        await reviewReplyLikeDislikeService.getById(id);
      res.send({
        status: "success",
        message: "reviewReplyLikeDislike berhasil diupdate!",
        data: {
          reviewReplyLikeDislike: updatedReviewReplyLikeDislike,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `reviewReplyLikeDislike dengan ID ${id} tidak ditemukan`,
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
  getAllReviewReplyLikeDislikeController,
  postReviewReplyLikeDislikeController,
  deleteReviewReplyLikeDislikeControllerById,
  updateReviewReplyLikeDislikeControllerById,
};
