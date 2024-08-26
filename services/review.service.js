const db = require("../models/index");

async function create(data) {
  const review = await db.Reviews.create(data);
  return review;
}

async function getAll() {
  const reviewsList = await db.Reviews.findAll({
    include: [
      {
        model: db.Users,
      },
      {
        model: db.Books,
      },
    ], // Menggunakan objek model Books secara langsung
  });
  return reviewsList;
}

async function getById(id) {
  const review = await db.Reviews.findByPk(id, {
    include: [
      {
        model: db.Users,
      },
      {
        model: db.Books,
      },
    ], // Menggunakan objek model Books secara langsung
  });
  return review;
}

async function deleteById(id) {
  const result = await db.Reviews.destroy({
    where: { id: id },
  });
  return result;
}

async function update(id, data) {
  const result = await db.Reviews.update(data, {
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
