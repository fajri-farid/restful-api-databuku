const db = require("../config/db");

async function create(data) {
  const author = await db.authors.create(data);
  return author;
}

async function getAll() {
  const authorsList = await db.authors.findAll();
  return authorsList;
}

async function deleteById(id) {
  const result = await db.authors.destroy({
    where: { id: id },
  });
  return result;
}

async function update(id, data) {
  const result = await db.authors.update(data, {
    where: { id: id },
  });
  return result[0];
}

module.exports = {
  create,
  getAll,
  deleteById,
  update,
};
