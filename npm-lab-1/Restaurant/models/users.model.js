const { sql, pool, poolConnect } = require("../db/mssql");

// Get all users
async function getAll() {
  await poolConnect; // ensure pool is ready
  const result = await pool.request().query("SELECT * FROM users");
  return result.recordset; // SQL Server returns recordset
}

// Get user by ID (parameterized)
async function getByID(id) {
  await poolConnect;
  const result = await pool
    .request()
    .input("UserID", sql.Int, id) // parameter binding
    .query("SELECT * FROM users WHERE UserID = @UserID");
  return result.recordset;
}

module.exports = { getAll, getByID};