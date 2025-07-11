const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');

// Lấy tất cả sản phẩm kèm thông tin chi tiết (JOIN)
router.get('/', async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT 
        sp.MaSanPham,
        sp.Ten,
        sp.Anh,
        sp.MoTa,
        sp.GiaTien,
        ct.ID AS IDChiTiet,
        dt.Ten AS DungTich,
        loai.Ten AS Loai,
        mh.Ten AS MuiHuong,
        xx.Ten AS XuatXu,
        ms.Ten AS MauSac,
        cl.Ten AS ChatLieu,
        ct.DonGia
      FROM SanPham sp
      JOIN SanPhamChiTiet ct ON sp.MaSanPham = ct.MaSanPham
      LEFT JOIN DungTich dt ON ct.MaDungTich = dt.MaDungTich
      LEFT JOIN LoaiSanPham loai ON ct.MaLoai = loai.MaLoai
      LEFT JOIN MuiHuong mh ON ct.MaMuiHuong = mh.MaMuiHuong
      LEFT JOIN XuatXu xx ON ct.MaXuatXu = xx.MaXuatXu
      LEFT JOIN MauSac ms ON ct.MaMau = ms.MaMau
      LEFT JOIN ChatLieuVoChai cl ON ct.MaChatLieu = cl.MaChatLieu
    `);

    res.json(result.recordset || []);
  } catch (err) {
    console.error('❌ Lỗi khi lấy danh sách sản phẩm:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
