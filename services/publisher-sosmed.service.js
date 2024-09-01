const db = require("../models/index");

async function create(data) {
  const publisherSosmed = await db.Publisher_Sosmeds.create(data);
  return publisherSosmed;
}

async function getAll() {
  const publisherSosmedList = await db.Publisher_Sosmeds.findAll({
    include: [
      {
        model: db.Social_Media,
      },
      {
        model: db.Publishers,
      },
    ],
  });
  return publisherSosmedList;
}

async function getById(id) {
  const publisherSosmed = await db.Publisher_Sosmeds.findByPk(id);
  return publisherSosmed;
}

async function update(id, data) {
  const result = await db.Publisher_Sosmeds.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.Publisher_Sosmeds.destroy({
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
