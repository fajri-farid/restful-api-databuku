const socialMediaService = require("../services/social-media.service");

async function getAllSocialMediaController(req, res) {
  try {
    const socialMedia = await socialMediaService.getAll();
    res.send({
      status: "success",
      message: "Social media berhasil diambil!",
      data: {
        socialMedia,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function postSocialMediaController(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const socialMediaData = await socialMediaService.create(data);

    res.send({
      status: "success",
      message: "Social media berhasil dibuat!",
      data: {
        social_media: socialMediaData,
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

async function deleteSocialMediaControllerById(req, res) {
  try {
    const { id } = req.params;

    const result = await socialMediaService.deleteById(id);

    if (result === 1) {
      res.send({
        status: "success",
        message: "Social media berhasil dihapus!",
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `Social media dengan ID ${id} tidak ditemukan`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
}

async function updateSocialMediaControllerById(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).send({
        status: "error",
        message: "Data payload is missing",
      });
    }

    const result = await socialMediaService.update(id, data);

    if (result === 1) {
      const updatedSocialMedia = await socialMediaService.getById(id);
      res.send({
        status: "success",
        message: "Social media berhasil diupdate!",
        data: {
          social_media: updatedSocialMedia,
        },
      });
    } else {
      res.status(404).send({
        status: "error",
        message: `Social media dengan ID ${id} tidak ditemukan`,
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
  getAllSocialMediaController,
  postSocialMediaController,
  deleteSocialMediaControllerById,
  updateSocialMediaControllerById,
};
