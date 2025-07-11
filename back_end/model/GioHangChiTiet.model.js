const { sql, config } = require('../config/db');

const GioHangChiTietModel = {
  getByGioHangId: async (gioHangId) => {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('gioHangId', sql.Int, gioHangId)
      .query(`SELECT * FROM GioHangChiTiet WHERE MaGioHang = @gioHangId`);
    return result.recordset;
  },

  create: async (chiTiet) => {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('MaGioHang', sql.Int, chiTiet.MaGioHang)
      .input('MaSPCT', sql.Int, chiTiet.MaSPCT)
      .input('SoLuong', sql.Int, chiTiet.SoLuong)
      .input('DonGia', sql.Decimal(18, 2), chiTiet.DonGia)
      .query(`INSERT INTO GioHangChiTiet (MaGioHang, MaSPCT, SoLuong, DonGia)
              OUTPUT INSERTED.ID
              VALUES (@MaGioHang, @MaSPCT, @SoLuong, @DonGia)`);
    return { ...chiTiet, ID: result.recordset[0].ID };
  }
};

module.exports = GioHangChiTietModel;
