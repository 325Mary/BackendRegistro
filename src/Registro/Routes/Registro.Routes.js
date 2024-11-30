const express = require('express');
const router = express.Router();
const ContactController = require('../Controllers/Registro.Controller');
const  authMiddleware= require('../../Middleware/AuthMiddleware')


router.post('/crearRegistro', authMiddleware, ContactController.createContact);

router.get('/LstarRegistros', authMiddleware, ContactController.getAllContacts);

router.get('/listarPorId/:id', authMiddleware,  ContactController.getContactById);

router.put('/actualizar/:id', authMiddleware, ContactController.updateContact);

router.delete('/eliminar/:id', authMiddleware, ContactController.deleteContact);

router.get('/search', ContactController.searchContacts);

module.exports = router;
