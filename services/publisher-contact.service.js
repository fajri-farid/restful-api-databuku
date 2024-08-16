const db = require("../models/index");

async function create(data) {
  const publisherContact = await db.publisherContacts.create(data);
  return publisherContact;
}

async function getAll() {
  const publisherContactList = await db.publisherContacts.findAll();
  return publisherContactList;
}

async function getById(id) {
  const publisherContact = await db.publisherContacts.findByPk(id);
  return publisherContact;
}

async function update(id, data) {
  const result = await db.publisherContacts.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.publisherContacts.destroy({
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
