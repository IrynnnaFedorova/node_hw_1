const { addContact } = require('./add-contact');
const { getContactById } = require('./get-contact-by-id');
const { listContacts } = require('./list-contacts');
const { removeContact } = require('./remove-contact');

module.exports = {
  addContact,
  getContactById,
  listContacts,
  removeContact,
};
