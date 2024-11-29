const connect = require('../../config/Database');

async function insertContact(contact) {
    const db = await connect();
    const result = await db.collection('contacts').insertOne(contact);
    return result;
}

async function findAllContacts() {
    const db = await connect();
    const contacts = await db.collection('contacts').find({}).toArray();
    return contacts;
}

async function findContactById(id) {
    const db = await connect();
    const { ObjectId } = require('mongodb');
    const contact = await db.collection('contacts').findOne({ _id: new ObjectId(id) });
    return contact;
}

async function updateContact(id, updatedData) {
    const db = await connect();
    const { ObjectId } = require('mongodb');
    const result = await db.collection('contacts').updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedData }
    );
    return result;
}

async function deleteContact(id) {
    const db = await connect();
    const { ObjectId } = require('mongodb');
    const result = await db.collection('contacts').deleteOne({ _id: new ObjectId(id) });
    return result;
}

module.exports = {
    insertContact,
    findAllContacts,
    findContactById,
    updateContact,
    deleteContact
};
