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

const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect()
  .then(() => console.log("✅ Đã kết nối SQL Server"))
  .catch(err => console.error("❌ Lỗi kết nối SQL Server:", err));

// ✅ Thêm hàm query nếu bạn muốn dùng kiểu db.query(sql)
const query = async (sqlText) => {
  await poolConnect;
  const result = await pool.request().query(sqlText);
  return result.recordset;
};

module.exports = {
  sql,
  pool,
  poolConnect,
  query // ✅ export thêm
};
