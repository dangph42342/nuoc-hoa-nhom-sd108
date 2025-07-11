const { pool } = require("../config/db");

exports.getKhachHangById = async (id) => {
  const result = await pool.request()
    .input("id", id)
    .query(`
      SELECT ID, Ten, SDT, Email, DiaChi
      FROM KhachHang
      WHERE ID = @id
    `);
  return result.recordset[0];
};
