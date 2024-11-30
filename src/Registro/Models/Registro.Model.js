const pool = require('../../config/Database');

async function insertContact(contact) {
    try {
        const sql = 'INSERT INTO contacts (name, phone, email) VALUES (?, ?, ?)';
        const [result] = await pool.execute(sql, [contact.name, contact.phone, contact.email]);
        return result.insertId;
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            throw new Error('El correo electrónico o el teléfono ya están registrados.');
        }
        throw new Error('Error al insertar el contacto.');
    }
}

async function getAllContacts() {
    const sql = 'SELECT id, name, phone, email FROM contacts ORDER BY name ASC';
    const [rows] = await pool.execute(sql);
    return rows;
}

async function getContactById(id) {
    const sql = 'SELECT id, name, phone, email FROM contacts WHERE id = ?';
    const [rows] = await pool.execute(sql, [id]);
    return rows[0];
}

async function updateContact(id, updatedData) {
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        const sql = 'UPDATE contacts SET name = ?, phone = ?, email = ? WHERE id = ?';
        const [result] = await connection.execute(sql, [updatedData.name, updatedData.phone, updatedData.email, id]);
        if (result.affectedRows === 0) {
            throw new Error('Contacto no encontrado');
        }
        await connection.commit();
        return result.affectedRows > 0;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
    }
}

async function deleteContact(id) {
    const contact = await getContactById(id);
    if (!contact) {
        throw new Error('Contacto no encontrado.');
    }
    const sql = 'DELETE FROM contacts WHERE id = ?';
    const [result] = await pool.execute(sql, [id]);
    return result.affectedRows > 0;
}

async function searchContacts(query) {
    const sql = 'SELECT id, name, phone, email FROM contacts WHERE name LIKE ? OR phone LIKE ? ORDER BY name ASC';
    const [rows] = await pool.execute(sql, [`%${query}%`, `%${query}%`]);
    return rows;
}

module.exports = {
    insertContact,
    getAllContacts,
    getContactById,
    updateContact,
    deleteContact,
    searchContacts
};
