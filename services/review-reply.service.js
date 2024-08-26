const db = require("../models/index");

async function create(data) {
  const reviewReply = await db.Review_Replies.create(data);
  return reviewReply;
}

async function getAll() {
  const reviewReplyList = await db.Review_Replies.findAll({
    include: [
      {
        model: db.Users,
      },
      {
        model: db.Reviews,
      },
    ], // Menggunakan objek model Books secara langsung
  });
  return reviewReplyList;
}

async function getById(id) {
  const reviewReply = await db.Review_Replies.findByPk(id, {
    include: [
      {
        model: db.Users,
      },
      {
        model: db.Reviews,
      },
    ], // Menggunakan objek model Books secara langsung
  });
  return reviewReply;
}

async function deleteById(id) {
  const result = await db.Review_Replies.destroy({
    where: { id: id },
  });
  return result;
}

async function update(id, data) {
  const result = await db.Review_Replies.update(data, {
    where: { id: id },
  });
  return result[0];
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  update,
};
