const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');

// Lấy chi tiết theo ID của bảng SanPhamChiTiet
router.get('/chi-tiet/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.request()
      .input('id', id)
      .query(`
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
        FROM SanPhamChiTiet ct
        JOIN SanPham sp ON sp.MaSanPham = ct.MaSanPham
        LEFT JOIN DungTich dt ON ct.MaDungTich = dt.MaDungTich
        LEFT JOIN LoaiSanPham loai ON ct.MaLoai = loai.MaLoai
        LEFT JOIN MuiHuong mh ON ct.MaMuiHuong = mh.MaMuiHuong
        LEFT JOIN XuatXu xx ON ct.MaXuatXu = xx.MaXuatXu
        LEFT JOIN MauSac ms ON ct.MaMau = ms.MaMau
        LEFT JOIN ChatLieuVoChai cl ON ct.MaChatLieu = cl.MaChatLieu
        WHERE ct.ID = @id
      `);

    if (result.recordset.length === 0) {
      return res.status(404).json({ message: 'Không tìm thấy chi tiết sản phẩm.' });
    }

    res.json(result.recordset[0]);
  } catch (err) {
    console.error('❌ Lỗi truy vấn chi tiết sản phẩm:', err);
    res.status(500).json({ error: 'Lỗi khi lấy chi tiết sản phẩm', chiTiet: err.message });
  }
});

module.exports = router;
