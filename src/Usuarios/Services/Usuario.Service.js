const UserModel = require('../Models/Usuario.Model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function registerUser(user) {
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

module.exports = {
    registerUser,
    loginUser,
    updateUser,
    resetPassword
};
