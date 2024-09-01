const { Model } = require("sequelize");
const db = require("../models/index");

async function create(data) {
  const authorSosmed = await db.Author_Sosmeds.create(data);
  return authorSosmed;
}

async function getAll() {
  const authorSosmedList = await db.Author_Sosmeds.findAll({
    include: [
      {
        model: db.Social_Media,
      },
      {
        model: db.Authors,
      },
    ],
  });
  return authorSosmedList;
}

async function getById(id) {
  const authorSosmed = await db.Author_Sosmeds.findByPk(id);
  return authorSosmed;
}

async function update(id, data) {
  const result = await db.Author_Sosmeds.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.Author_Sosmeds.destroy({
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
