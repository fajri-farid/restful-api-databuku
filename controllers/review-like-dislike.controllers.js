const reviewLikeDislikeService = require("../services/review-like-dislike.service");

async function getAllReviewLikeDislikeController(req, res) {
  try {
    const reviewLikeDislike = await reviewLikeDislikeService.getAll();
    res.send({
      status: "success",
      message: "reviewLikeDislike berhasil diambil!",
      data: {
        reviewLikeDislike,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postReviewLikeDislikeController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const reviewLikeDislikeData = await reviewLikeDislikeService.create(data);

    res.send({
      status: "success",
      message: "reviewLikeDislike berhasil dibuat!",
      data: {
        reviewLikeDislike: reviewLikeDislikeData,
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

async function deleteReviewLikeDislikeControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await reviewLikeDislikeService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "reviewLikeDislike berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `reviewLikeDislike dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updateReviewLikeDislikeControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await reviewLikeDislikeService.update(id, data);

    if (result === 1) {
      const updatedReviewLikeDislike = await reviewLikeDislikeService.getById(
        id
      );
      res.send({
        status: "success",
        message: "Author berhasil diupdate!",
        data: {
          reviewLikeDislike: updatedReviewLikeDislike,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `reviewLikeDislike dengan ID ${id} tidak ditemukan`,
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
  getAllReviewLikeDislikeController,
  postReviewLikeDislikeController,
  deleteReviewLikeDislikeControllerById,
  updateReviewLikeDislikeControllerById,
};
