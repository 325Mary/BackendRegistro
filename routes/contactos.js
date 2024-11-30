const express = require('express');
const router = express.Router();
const UserController = require('../src/Usuarios/Controllers/Usuario.Controller');
const ContactController = require('../src/Registro/Controllers/Registro.Controller');

const authMiddleware = require('../src/Middleware/AuthMiddleware');

/**
 * @swagger
 * /register:
 *   post:
 *     description: Registrar un nuevo usuario
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *               identificacion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 */
router.post('/register', UserController.registerUser);

/**
 * @swagger
 * /login:
 *   post:
 *     description: Iniciar sesión como usuario
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario logueado exitosamente
 *       401:
 *         description: Credenciales incorrectas
 */
router.post('/login', UserController.loginUser);

/**
 * @swagger
 * /update/{id}:
 *   put:
 *     description: Actualizar un usuario
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: integer
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               identificacion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       400:
 *         description: Solicitud incorrecta
 *       401:
 *         description: No autorizado
 */
router.put('/update/:id', authMiddleware, UserController.updateUser);

/**
 * @swagger
 * /reset-password/{id}:
 *   put:
 *     description: Resetear la contraseña de un usuario
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contraseña restablecida exitosamente
 */
router.put('/reset-password/:id', UserController.resetPassword);

/**
 * @swagger
 * /ListarUsers:
 *   get:
 *     description: Listar todos los usuarios
 *     tags:
 *       - Usuarios
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *       401:
 *         description: No autorizado
 */
router.get('/ListarUsers', authMiddleware, UserController.listUsers);

/**
 * @swagger
 * /Logout:
 *   post:
 *     description: Cerrar sesión del usuario
 *     tags:
 *       - Usuarios
 *     responses:
 *       200:
 *         description: Sesión cerrada exitosamente
 */
router.post('/Logout', UserController.Logout);

/**
 * @swagger
 * /delete/{id}:
 *   delete:
 *     description: Eliminar un usuario
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: integer
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: Usuario no encontrado
 *       401:
 *         description: No autorizado
 */
router.delete('/delete/:id', authMiddleware, UserController.deleteUser);



/**
 * @swagger
 * /crearRegistro:
 *   post:
 *     description: Crear un nuevo registro de contacto
 *     tags:
 *       - Contactos
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Contacto creado exitosamente
 *       401:
 *         description: No autorizado
 */
router.post('/crearRegistro', authMiddleware, ContactController.createContact);

/**
 * @swagger
 * /LstarRegistros:
 *   get:
 *     description: Obtener todos los registros de contacto
 *     tags:
 *       - Contactos
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de contactos
 *       401:
 *         description: No autorizado
 */
router.get('/LstarRegistros', authMiddleware, ContactController.getAllContacts);

/**
 * @swagger
 * /listarPorId/{id}:
 *   get:
 *     description: Obtener un contacto por ID
 *     tags:
 *       - Contactos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del contacto
 *         schema:
 *           type: integer
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Contacto encontrado
 *       404:
 *         description: Contacto no encontrado
 *       401:
 *         description: No autorizado
 */
router.get('/listarPorId/:id', authMiddleware, ContactController.getContactById);

/**
 * @swagger
 * /actualizar/{id}:
 *   put:
 *     description: Actualizar un contacto
 *     tags:
 *       - Contactos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del contacto
 *         schema:
 *           type: integer
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contacto actualizado exitosamente
 *       400:
 *         description: Solicitud incorrecta
 *       401:
 *         description: No autorizado
 */
router.put('/actualizar/:id', authMiddleware, ContactController.updateContact);

/**
 * @swagger
 * /eliminar/{id}:
 *   delete:
 *     description: Eliminar un contacto por ID
 *     tags:
 *       - Contactos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del contacto
 *         schema:
 *           type: integer
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Contacto eliminado exitosamente
 *       404:
 *         description: Contacto no encontrado
 *       401:
 *         description: No autorizado
 */
router.delete('/eliminar/:id', authMiddleware, ContactController.deleteContact);


module.exports = router;
