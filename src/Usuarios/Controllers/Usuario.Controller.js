const UserService = require('../Services/Usuario.Service');

async function registerUser(req, res) {
    try {
        const result = await UserService.registerUser(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;
        const result = await UserService.loginUser(email, password);
        res.status(200).json(result);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

async function updateUser(req, res) {
    try {
        await UserService.updateUser(req.params.id, req.body);
        res.status(200).json({ message: "Usuario actualizado exitosamente." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function resetPassword(req, res) {
    try {
        const { id } = req.params;
        const { newPassword } = req.body;
        await UserService.resetPassword(id, newPassword);
        res.status(200).json({ message: "Contraseña actualizada exitosamente." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    registerUser,
    loginUser,
    updateUser,
    resetPassword
};
