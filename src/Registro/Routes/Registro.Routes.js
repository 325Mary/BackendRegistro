const express = require('express');
const router = express.Router();
const ContactController = require('../Controllers/Registro.Controller');

router.post('/', ContactController.createContact);
router.get('/', ContactController.getAllContacts);
router.get('/:id', ContactController.getContactById);
router.put('/:id', ContactController.updateContact);
router.delete('/:id', ContactController.deleteContact);

module.exports = router;
