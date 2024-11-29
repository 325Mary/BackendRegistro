const pool = require('../../config/Database'); 
async function insertContact(contact) {
    const sql = 'INSERT INTO contacts (name, phone, email) VALUES (?, ?, ?)';
    const [result] = await pool.execute(sql, [contact.name, contact.phone, contact.email]);
    return result.insertId;
}

async function getAllContacts() {
    const sql = 'SELECT * FROM contacts ORDER BY name ASC';  
    const [rows] = await pool.execute(sql);
    return rows;
}

async function getContactById(id) {
    const sql = 'SELECT * FROM contacts WHERE id = ?';
    const [rows] = await pool.execute(sql, [id]);
    return rows[0];
}

async function updateContact(id, updatedData) {
    const sql = 'UPDATE contacts SET name = ?, phone = ?, email = ? WHERE id = ?';
    const [result] = await pool.execute(sql, [updatedData.name, updatedData.phone, updatedData.email, id]);
    return result.affectedRows > 0; 
}
async function deleteContact(id) {
    const sql = 'DELETE FROM contacts WHERE id = ?';
    const [result] = await pool.execute(sql, [id]);
    return result.affectedRows > 0;  
}
async function searchContacts(query) {
    const sql = 'SELECT * FROM contacts WHERE name LIKE ? OR phone LIKE ? ORDER BY name ASC';
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
