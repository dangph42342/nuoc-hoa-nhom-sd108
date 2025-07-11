router.get("/khach/:id", async (req, res) => {
  const maKH = req.params.id;

  try {
    const hoadons = await pool.request()
      .input("MaKH", maKH)
      .query(`
        SELECT hd.MaHD, hd.NgayTao, hd.TrangThaiGiaoHang, 
               tt.Ten AS TrangThaiThanhToan,
               SUM(ct.SoLuong * ct.DonGia) AS TongTien
        FROM HoaDon hd
        JOIN TrangThaiThanhToan tt ON hd.TrangThaiThanhToan = tt.MaTrangThai
        JOIN HoaDonChiTiet ct ON ct.MaHD = hd.MaHD
        WHERE hd.MaKH = @MaKH
        GROUP BY hd.MaHD, hd.NgayTao, hd.TrangThaiGiaoHang, tt.Ten
        ORDER BY hd.NgayTao DESC
      `);

    const result = [];

    for (let hd of hoadons.recordset) {
      const ct = await pool.request()
        .input("MaHD", hd.MaHD)
        .query(`
          SELECT sp.Ten, sp.Anh, ct.SoLuong, ct.DonGia
          FROM HoaDonChiTiet ct
          JOIN SanPhamChiTiet spct ON spct.ID = ct.MaSPCT
          JOIN SanPham sp ON sp.MaSanPham = spct.MaSanPham
          WHERE ct.MaHD = @MaHD
        `);

      result.push({ ...hd, ChiTiet: ct.recordset });
    }

    res.json(result);
  } catch (err) {
    console.error("❌ Lỗi lấy đơn hàng:", err);
    res.status(500).json({ error: err.message });
  }
});
