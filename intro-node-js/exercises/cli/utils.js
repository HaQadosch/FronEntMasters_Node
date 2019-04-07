const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
const contactsLocation = 'contacts.json'
const contactPath = path.join(__dirname, contactsLocation)

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const data = fs.readFileSync(contactPath, 'utf-8')
  return JSON.parse(data)
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  fs.writeFile(contactPath, JSON.stringify(contacts), 'utf-8', _ => _)
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}
