const ContactModel = require('../Models/Registro.Model');

async function registerContact(contact) {
    return await ContactModel.insertContact(contact);
}

async function getContacts() {
    return await ContactModel.getAllContacts();
}

async function getContactById(id) {
    return await ContactModel.getContactById(id);
}

async function updateContact(id, updatedData) {
    return await ContactModel.updateContact(id, updatedData);
}

async function deleteContact(id) {
    return await ContactModel.deleteContact(id);
}

async function searchContacts(query) {
    return await ContactModel.searchContacts(query);
}

module.exports = {
    registerContact,
    getContacts,
    getContactById,
    updateContact,
    deleteContact,
    searchContacts
};
