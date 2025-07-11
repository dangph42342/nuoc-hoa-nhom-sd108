const express = require('express');
const router = express.Router();
const { pool } = require('../config/db'); // hoặc ../db nếu bạn dùng đường dẫn khác

router.get('/', async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT gh.*, ct.*, sp.Ten, sp.Anh, sp.GiaTien
      FROM GioHang gh
      JOIN GioHangChiTiet ct ON gh.MaGioHang = ct.MaGioHang
      JOIN SanPham sp ON sp.MaSanPham = ct.MaSanPham
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error('❌ Lỗi lấy giỏ hàng đầy đủ:', err);
    res.status(500).json({ error: 'Lỗi truy vấn giỏ hàng đầy đủ' });
  }
});

module.exports = router; // ✅ Đảm bảo export router
