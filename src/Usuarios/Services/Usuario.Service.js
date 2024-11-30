const UserModel = require('../Models/Usuario.Model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { listaNegraService } = require('../Services/ListBlackService');
const { validateEmail, validatePassword } = require('../../utils/validadores'); 

async function registerUser(user) {
    if (!validateEmail(user.email)) throw new Error("Email inválido.");
    if (!validatePassword(user.password)) throw new Error("La identificacion no cumple con los requisitos. Debe tener al menos 6 caracteres");

    const existingUser = await UserModel.findUserByEmail(user.email);
    if (existingUser) throw new Error("El correo ya está registrado.");
    
    user.password = await bcrypt.hash(user.password, 10);
    const userId = await UserModel.insertUser(user);
    return { id: userId, message: "Usuario creado exitosamente." };
}

async function loginUser(email, password) {
    const user = await UserModel.findUserByEmail(email);
    if (!user) throw new Error("Usuario no encontrado.");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error("Contraseña incorrecta.");
    
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, userId: user.id };
}

async function updateUser(id, updatedData) {
    return await UserModel.updateUser(id, updatedData);
}

async function resetPassword(id, newPassword) {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    return await UserModel.updatePassword(id, hashedPassword);
}

async function listUsers() {
    return await UserModel.listUsers();
}

async function Logout(token) {
    if (!token) throw new Error('Token no proporcionado');
    await listaNegraService.agregarToken(token);
    return { message: 'Sesión cerrada exitosamente' };
}

async function deleteUser(id) {
    const isDeleted = await UserModel.deleteUser(id);
    if (!isDeleted) throw new Error("No se pudo eliminar el usuario.");
    return { message: "Usuario eliminado exitosamente." };
}

module.exports = {
    registerUser,
    loginUser,
    updateUser,
    resetPassword,
    listUsers,
    Logout,
    deleteUser
};
