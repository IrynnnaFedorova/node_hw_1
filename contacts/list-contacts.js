const { readContent } = require('./read-content.js.js');

async function listContacts() {
  return await readContent();
}

module.exports = { listContacts };
