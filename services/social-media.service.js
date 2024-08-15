const db = require("../models/index");

async function create(data) {
  const social_media = await db.Social_Media.create(data);
  return social_media;
}

async function getAll() {
  const social_media_list = await db.Social_Media.findAll();
  return social_media_list;
}

async function getById(id) {
  const social_media = await db.Social_Media.findByPk(id);
  return social_media;
}

async function update(id, data) {
  const result = await db.Social_Media.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.Social_Media.destroy({
    where: { id: id },
  });
  return result;
}

module.exports = {
  create,
  getAll,
  update,
  deleteById,
  getById,
};
