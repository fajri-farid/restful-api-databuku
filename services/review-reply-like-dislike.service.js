const db = require("../models/index");

async function create(data) {
  const reviewRepliyLikeDislike = await db.Review_Reply_Like_Dislikes.create(
    data
  );
  return reviewRepliyLikeDislike;
}

async function getAll() {
  const roleList = await db.Review_Reply_Like_Dislikes.findAll({
    include: [
      {
        model: db.Users,
      },
      {
        model: db.Review_Replies,
      },
    ], // Menggunakan objek model Books secara langsung
  });
  return roleList;
}

async function getById(id) {
  const reviewRepliyLikeDislike = await db.Review_Reply_Like_Dislikes.findByPk(
    id,
    {
      include: [
        {
          model: db.Users,
        },
        {
          model: db.Review_Replies,
        },
      ], // Menggunakan objek model Books secara langsung
    }
  );
  return reviewRepliyLikeDislike;
}

async function update(id, data) {
  const result = await db.Review_Reply_Like_Dislikes.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.Review_Reply_Like_Dislikes.destroy({
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
