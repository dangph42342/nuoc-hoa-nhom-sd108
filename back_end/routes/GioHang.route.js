// routes/GioHang.route.js
const express = require('express');
const router = express.Router();
const { query } = require('../config/db');

router.get('/', async (req, res) => {
  try {
    const sql = `
      SELECT gh.*, ct.*, sp.Ten, sp.Anh, sp.GiaTien
      FROM GioHang gh
      JOIN GioHangChiTiet ct ON gh.MaGioHang = ct.MaGioHang
      JOIN SanPham sp ON sp.MaSanPham = ct.MaSanPham
    `;
    const result = await query(sql);
    res.json(result || []);
  } catch (err) {
    console.error('❌ Lỗi lấy giỏ hàng đầy đủ:', err);
    res.status(500).json({ error: 'Lỗi truy vấn giỏ hàng đầy đủ' });
  }
});

module.exports = router;
