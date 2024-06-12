const db = require("../config/db/index");
const { authors } = db;

async function create(data) {
  const author = await authors.create(data);
  return author;
}

module.exports = {
  create,
};
