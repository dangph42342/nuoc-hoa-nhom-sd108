const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');

// ✅ Lấy toàn bộ danh sách sản phẩm
router.get('/', async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT 
        sp.MaSanPham,
        sp.Ten,
        sp.Anh,
        sp.MoTa,
        sp.GiaTien
      FROM SanPham sp
    `);

    res.json(result.recordset);
  } catch (err) {
    console.error('❌ Lỗi khi lấy danh sách sản phẩm:', err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Lấy chi tiết sản phẩm theo MaSanPham
router.get('/ma/:maSanPham', async (req, res) => {
  try {
    const { maSanPham } = req.params;

    // Kiểm tra nếu không hợp lệ thì trả lỗi sớm
    if (!maSanPham || isNaN(maSanPham)) {
      return res.status(400).json({ error: 'Mã sản phẩm không hợp lệ' });
    }

    const result = await pool.request()
      .input('maSanPham', Number(maSanPham)) // ép kiểu về số
      .query(`
        SELECT 
          sp.MaSanPham,
          sp.Ten,
          sp.Anh,
          sp.MoTa,
          sp.GiaTien,
          ct.ID AS IDChiTiet,
          dt.Ten AS DungTich,
          ms.Ten AS MauSac,
          ct.DonGia
        FROM SanPham sp
        JOIN SanPhamChiTiet ct ON sp.MaSanPham = ct.MaSanPham
        LEFT JOIN DungTich dt ON ct.MaDungTich = dt.MaDungTich
        LEFT JOIN MauSac ms ON ct.MaMau = ms.MaMau
        WHERE sp.MaSanPham = @maSanPham
      `);

    if (result.recordset.length === 0) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
    }

    res.json(result.recordset);
  } catch (err) {
    console.error('❌ Lỗi khi lấy chi tiết theo MaSanPham:', err);
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
