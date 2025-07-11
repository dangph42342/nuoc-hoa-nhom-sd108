const express = require('express');
const router = express.Router();

// ====== Import các route con ======
const sanPhamRoute = require('./SanPham.route');
const sanPhamChiTietRoute = require('./SanPhamChiTiet.route');
const thuongHieuRoute = require('./ThuongHieu.route');
const muiHuongRoute = require('./MuiHuong.route');
const loaiSanPhamRoute = require('./LoaiSanPham.route');
const dungTichRoute = require('./DungTich.route');
const xuatXuRoute = require('./XuatXu.route');
const mauSacRoute = require('./MauSac.route');
const chatLieuVoChaiRoute = require('./ChatLieuVoChai.route');
const khachHangRoute = require('./KhachHang.route');
const nhanVienRoute = require('./NhanVien.route');
const khuyenMaiRoute = require('./KhuyenMai.route');
const sanPhamKhuyenMaiRoute = require('./SanPhamKhuyenMai.route');
const hoaDonRoute = require('./HoaDon.route');
const hoaDonChiTietRoute = require('./HoaDonChiTiet.route');
const hinhThucThanhToanRoute = require('./HinhThucThanhToan.route');
const trangThaiThanhToanRoute = require('./TrangThaiThanhToan.route');
const bannerRoute = require('./Banner.route');
const gioHangRoute = require('./GioHang.route');
const gioHangChiTietRoute = require('./GioHangChiTiet.route');
const gioHangFullRoute = require('./GioHangFull.route');

// ====== Gắn các route con với prefix /api ======
// Sản phẩm
router.use('/api/san-pham', sanPhamRoute);
router.use('/api/san-pham-chi-tiet', sanPhamChiTietRoute);

// Các thuộc tính sản phẩm
router.use('/api/thuong-hieu', thuongHieuRoute);
router.use('/api/mui-huong', muiHuongRoute);
router.use('/api/loai-san-pham', loaiSanPhamRoute);
router.use('/api/dung-tich', dungTichRoute);
router.use('/api/xuat-xu', xuatXuRoute);
router.use('/api/mau-sac', mauSacRoute);
router.use('/api/chat-lieu-vo-chai', chatLieuVoChaiRoute);

// Khách hàng, nhân viên
router.use('/api/khach-hang', khachHangRoute);
router.use('/api/nhan-vien', nhanVienRoute);

// Khuyến mãi
router.use('/api/khuyen-mai', khuyenMaiRoute);
router.use('/api/san-pham-khuyen-mai', sanPhamKhuyenMaiRoute);

// Hóa đơn
router.use('/api/hoa-don', hoaDonRoute);
router.use('/api/hoa-don-chi-tiet', hoaDonChiTietRoute);
router.use('/api/hinh-thuc-thanh-toan', hinhThucThanhToanRoute);
router.use('/api/trang-thai-thanh-toan', trangThaiThanhToanRoute);

// Giỏ hàng
router.use('/api/gio-hang', gioHangRoute);
router.use('/api/gio-hang-chi-tiet', gioHangChiTietRoute);
router.use('/api/gio-hang-full', gioHangFullRoute);

// Banner
router.use('/api/banner', bannerRoute);

// ====== Export router cha ======
module.exports = router;
