const db = require("../models/index");

async function create(data) {
  const reviewLikeDislike = await db.Review_Like_Dislikes.create(data);
  return reviewLikeDislike;
}

async function getAll() {
  const reviewLikeDislikeList = await db.Review_Like_Dislikes.findAll();
  return reviewLikeDislikeList;
}

async function getById(id) {
  const reviewLikeDislike = await db.Review_Like_Dislikes.findByPk(id);
  return reviewLikeDislike;
}

async function update(id, data) {
  const result = await db.Review_Like_Dislikes.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.Review_Like_Dislikes.destroy({
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
