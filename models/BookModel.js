import pool from './db.js';

export const getBooks = async () => {
    const [rows] = await pool.query('SELECT * FROM tblbook');
    return rows;
}

