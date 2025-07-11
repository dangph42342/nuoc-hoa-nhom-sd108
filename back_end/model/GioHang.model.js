const { sql, config } = require('../config/db');

const GioHangModel = {
  getAll: async () => {
    const pool = await sql.connect(config);
    const result = await pool.request().query(`SELECT * FROM GioHang`);
    return result.recordset;
  },

  getById: async (id) => {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('id', sql.Int, id)
      .query(`SELECT * FROM GioHang WHERE MaGioHang = @id`);
    return result.recordset[0];
  },

  create: async (gioHang) => {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('MaKhachHang', sql.Int, gioHang.MaKhachHang)
      .input('NgayTao', sql.Date, gioHang.NgayTao)
      .input('TrangThai', sql.Bit, gioHang.TrangThai)
      .query(`INSERT INTO GioHang (MaKhachHang, NgayTao, TrangThai)
              OUTPUT INSERTED.MaGioHang
              VALUES (@MaKhachHang, @NgayTao, @TrangThai)`);
    return { ...gioHang, MaGioHang: result.recordset[0].MaGioHang };
  }
};

module.exports = GioHangModel;
