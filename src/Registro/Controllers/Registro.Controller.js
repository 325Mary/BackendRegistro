const ContactService = require('../Services/Registro.Service');

async function createContact(req, res) {
    try {
        const contact = req.body;
        const contactId = await ContactService.registerContact(contact);
        res.status(201).json({ message: 'Contacto creado exitosamente', contactId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllContacts(req, res) {
    try {
        const contacts = await ContactService.getContacts();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getContactById(req, res) {
    try {
        const { id } = req.params;
        const contact = await ContactService.getContactById(id);
        if (!contact) {
            return res.status(404).json({ error: 'Contacto no encontrado' });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateContact(req, res) {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const result = await ContactService.updateContact(id, updatedData);
        if (result) {
            res.status(200).json({ message: 'Contacto actualizado exitosamente' });
        } else {
            res.status(404).json({ error: 'Contacto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
async function deleteContact(req, res) {
    try {
        const { id } = req.params;
        const result = await ContactService.deleteContact(id);
        if (result) {
            res.status(200).json({ message: 'Contacto eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Contacto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function searchContacts(req, res) {
    try {
        const { query } = req.query;
        const contacts = await ContactService.searchContacts(query);
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createContact,
    getAllContacts,
    getContactById,
    updateContact,
    deleteContact,
    searchContacts
};
