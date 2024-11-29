const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/Usuario.Controller');

router.post('/register', UserController.registerUser);

router.post('/login', UserController.loginUser);

router.put('/:id', UserController.updateUser);

router.put('/reset-password/:id', UserController.resetPassword);

module.exports = router;
