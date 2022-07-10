const { readContent } = require('./read-content');

async function listContacts() {
  return await readContent();
}

module.exports = { listContacts };
