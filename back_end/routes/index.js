// File: routes/index.js

const express = require('express');
const router = express.Router();

// ====== Import tất cả các route con (cùng thư mục) ======
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

// ====== Gắn route vào router cha ======
router.use('/san-pham', sanPhamRoute);
router.use('/san-pham-chi-tiet', sanPhamChiTietRoute);
router.use('/thuong-hieu', thuongHieuRoute);
router.use('/mui-huong', muiHuongRoute);
router.use('/loai-san-pham', loaiSanPhamRoute);
router.use('/dung-tich', dungTichRoute);
router.use('/xuat-xu', xuatXuRoute);
router.use('/mau-sac', mauSacRoute);
router.use('/chat-lieu-vo-chai', chatLieuVoChaiRoute);
router.use('/khach-hang', khachHangRoute);
router.use('/nhan-vien', nhanVienRoute);
router.use('/khuyen-mai', khuyenMaiRoute);
router.use('/san-pham-khuyen-mai', sanPhamKhuyenMaiRoute);
router.use('/hoa-don', hoaDonRoute);
router.use('/hoa-don-chi-tiet', hoaDonChiTietRoute);
router.use('/hinh-thuc-thanh-toan', hinhThucThanhToanRoute);
router.use('/trang-thai-thanh-toan', trangThaiThanhToanRoute);
router.use('/banner', bannerRoute);

// ====== Export router cha để sử dụng ngoài index.js ======
module.exports = router;
