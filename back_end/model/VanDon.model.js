const { pool } = require("../config/db");

exports.getTrangThaiGiaoHang = async (maHD) => {
  const result = await pool.request()
    .input("maHD", maHD)
    .query(`
      SELECT MaHD, TrangThaiGiaoHang, NgayCapNhat
      FROM HoaDon
      WHERE MaHD = @maHD
    `);
  return result.recordset[0];
};
