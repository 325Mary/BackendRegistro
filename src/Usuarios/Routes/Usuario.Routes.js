const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/Usuario.Controller');
const  authMiddleware= require('../../Middleware/AuthMiddleware')


router.post('/register', UserController.registerUser);

router.post('/login', UserController.loginUser);

router.put('/update/:id', authMiddleware, UserController.updateUser);

router.put('/reset-password/:id', UserController.resetPassword);
router.get('/ListarUsers',authMiddleware, UserController.listUsers);
router.post('/Logout', UserController.Logout);
router.delete('/delete/:id', authMiddleware, UserController.deleteUser);

module.exports = router;
