// model/GioHangFull.model.js
const { sql, config } = require('../config/db');

const getFullCartById = async (id) => {
  const pool = await sql.connect(config);

  const gioHang = await pool.request()
    .input('id', sql.Int, id)
    .query(`SELECT * FROM GioHang WHERE MaGioHang = @id`);

  const chiTiet = await pool.request()
    .input('id', sql.Int, id)
    .query(`
      SELECT ghct.*, sp.Ten AS TenSanPham
      FROM GioHangChiTiet ghct
      JOIN SanPhamChiTiet spct ON ghct.MaSPCT = spct.ID
      JOIN SanPham sp ON spct.MaSanPham = sp.MaSanPham
      WHERE ghct.MaGioHang = @id
    `);

  return {
    gioHang: gioHang.recordset[0],
    chiTiet: chiTiet.recordset
  };
};

module.exports = { getFullCartById };
