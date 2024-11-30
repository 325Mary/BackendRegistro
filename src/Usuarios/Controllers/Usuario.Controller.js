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

async function listUsers(req, res) {
    try {
        const users = await UserService.listUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function Logout(req, res) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) return res.status(401).json({ error: 'No se proporcionó un token de autenticación' });

        const token = authorizationHeader.split(' ')[1];
        if (!token) return res.status(401).json({ error: 'Formato de token inválido' });

        await UserService.Logout(token);
        res.status(200).json({ message: 'Sesión cerrada exitosamente' });
    } catch (error) {
        console.error('Error al cerrar sesión:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        await UserService.deleteUser(id);
        res.status(200).json({ message: "Usuario eliminado exitosamente." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
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
