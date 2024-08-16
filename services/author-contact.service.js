const db = require("../models/index");

async function create(data) {
  const authorContact = await db.Author_Contacts.create(data);
  return authorContact;
}

async function getAll() {
  const authorContactList = await db.Author_Contacts.findAll();
  return authorContactList;
}

async function getById(id) {
  const authorContact = await db.Author_Contacts.findByPk(id);
  return authorContact;
}

async function update(id, data) {
  const result = await db.Author_Contacts.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.Author_Contacts.destroy({
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
