const { poolPromise, sql } = require("../db/mssql");

// Get all rows from a table
async function getAll() {
  const pool = await poolPromise;
  const result = await pool.request()
    .query("SELECT * FROM users");   // change table name here
  return result.recordset;
}

// Get row by ID
async function getByID(id) {
  const pool = await poolPromise;
  const result = await pool.request()
    .input("id", sql.Int, id)
    .query("SELECT * FROM users WHERE UserID = @id"); // adjust column name
  return result.recordset;
}

module.exports = { getAll, getByID };