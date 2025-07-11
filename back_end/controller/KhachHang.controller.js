const { pool } = require("../config/db");

exports.themKhachHang = async (req, res) => {
  try {
    const { ten, sdt, diaChi, email, gioiTinh = 1 } = req.body;

    const result = await pool.request()
      .input("ten", ten)
      .input("sdt", sdt)
      .input("diaChi", diaChi)
      .input("email", email)
      .input("gioiTinh", gioiTinh)
      .query(`
        INSERT INTO KhachHang (Ten, SDT, DiaChi, Email, GioiTinh, NgayTao, TrangThai)
        OUTPUT INSERTED.ID
        VALUES (@ten, @sdt, @diaChi, @email, @gioiTinh, GETDATE(), 1)
      `);

    const newID = result.recordset[0].ID;
    res.status(201).json({ id: newID });
  } catch (err) {
    console.error("❌ Lỗi khi thêm khách hàng:", err);
    res.status(500).json({ error: "Lỗi máy chủ" });
  }
};
