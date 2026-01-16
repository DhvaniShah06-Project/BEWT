const sql = require("mssql");

const config = {
  user: "restaurant",
  password: "restaurant@123",
  server: "localhost",       // or server IP
  database: "RESTAURANT_BACKEND",
   options: {
    encrypt: true,              // required for newer SQL Server versions
    trustServerCertificate: true // 👈 THIS FIXES THE ERROR
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log("Connected to MSSQL");
    return pool;
  })
  .catch(err => console.log("Database Connection Failed!", err));

module.exports = {
  sql,
  poolPromise
};