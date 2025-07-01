const { poolPromise, sql } = require('../config/db');

const SanPhamModel = {
  getAll: async () => {
    try {
      const pool = await poolPromise;
      const result = await pool.request().query(`
        SELECT sp.MaSanPham, sp.Ten, sp.Anh, sp.MoTa, sp.GiaTien, sp.NgayTao, th.Ten AS TenThuongHieu
        FROM SanPham sp
        JOIN ThuongHieu th ON sp.MaThuongHieu = th.MaThuongHieu
        WHERE sp.TrangThai = 1
      `);
      return result.recordset;
    } catch (err) {
      throw err;
    }
  },

  getById: async (id) => {
    try {
      const pool = await poolPromise;
      const result = await pool.request()
        .input('id', sql.Int, id)
        .query(`SELECT * FROM SanPham WHERE MaSanPham = @id`);
      return result.recordset[0];
    } catch (err) {
      throw err;
    }
  }
};

module.exports = SanPhamModel;
