const express = require('express');
const router = express.Router();
const ContactController = require('../Controllers/Registro.Controller');

router.post('/crearRegistro', ContactController.createContact);

router.get('/LstarRegistro', ContactController.getAllContacts);

router.get('/listarPorId/:id', ContactController.getContactById);

router.put('/actualizar/:id', ContactController.updateContact);

router.delete('/eliminar/:id', ContactController.deleteContact);

router.get('/search', ContactController.searchContacts);

module.exports = router;
