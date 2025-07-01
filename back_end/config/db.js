// config/db.js
require('dotenv').config();
const sql = require('mssql');

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
  port: parseInt(process.env.DB_PORT),
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("✅ Đã kết nối SQL Server");
    return pool;
  })
  .catch((err) => {
    console.error("❌ Lỗi kết nối SQL Server:", err);
  });

/**
 * Gói gọn 1 hàm query đơn giản
 */
const query = async (sqlText) => {
  const pool = await poolPromise;
  const result = await pool.request().query(sqlText);
  return result.recordset; // Trả về mảng kết quả
};

module.exports = {
  query, // ✅ Giúp gọi db.query(...) trong route
};
