const ContactService = require('../Services/Registro.Service');

async function createContact(req, res) {
    try {
        const result = await ContactService.createContact(req.body);
        res.status(201).json({ id: result.insertedId });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getAllContacts(req, res) {
    try {
        const contacts = await ContactService.getAllContacts();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los contactos." });
    }
}

async function getContactById(req, res) {
    try {
        const contact = await ContactService.getContactById(req.params.id);
        res.status(200).json(contact);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

async function updateContact(req, res) {
    try {
        await ContactService.updateContact(req.params.id, req.body);
        res.status(200).json({ message: "Contacto actualizado correctamente." });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

async function deleteContact(req, res) {
    try {
        await ContactService.deleteContact(req.params.id);
        res.status(200).json({ message: "Contacto eliminado correctamente." });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = {
    createContact,
    getAllContacts,
    getContactById,
    updateContact,
    deleteContact
};
