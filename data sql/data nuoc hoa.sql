-- TẠO DATABASE
CREATE DATABASE NuocHoaDB;
GO
USE NuocHoaDB;
GO

-- 1. Thương hiệu
CREATE TABLE ThuongHieu (
  MaThuongHieu INT PRIMARY KEY,
  Ten NVARCHAR(100)
);

-- 2. Mùi hương
CREATE TABLE MuiHuong (
  MaMuiHuong INT PRIMARY KEY,
  Ten NVARCHAR(100)
);

-- 3. Loại sản phẩm
CREATE TABLE LoaiSanPham (
  MaLoai INT PRIMARY KEY,
  Ten NVARCHAR(100)
);

-- 4. Dung tích
CREATE TABLE DungTich (
  MaDungTich INT PRIMARY KEY,
  Ten NVARCHAR(50)
);

-- 5. Xuất xứ
CREATE TABLE XuatXu (
  MaXuatXu INT PRIMARY KEY,
  Ten NVARCHAR(100)
);

-- 6. Màu sắc
CREATE TABLE MauSac (
  MaMau INT PRIMARY KEY,
  Ten NVARCHAR(50)
);

-- 7. Chất liệu vỏ chai
CREATE TABLE ChatLieuVoChai (
  MaChatLieu INT PRIMARY KEY,
  Ten NVARCHAR(100)
);

-- 8. Sản phẩm
CREATE TABLE SanPham (
  MaSanPham INT PRIMARY KEY,
  Ten NVARCHAR(255),
  Anh NVARCHAR(255),
  MoTa NVARCHAR(MAX),
  NgayTao DATE,
  GiaTien DECIMAL(18, 2),
  TrangThai BIT,
  MaThuongHieu INT,
  FOREIGN KEY (MaThuongHieu) REFERENCES ThuongHieu(MaThuongHieu)
);

-- 9. Chi tiết sản phẩm
CREATE TABLE SanPhamChiTiet (
  ID INT PRIMARY KEY,
  MaSanPham INT,
  MaLoai INT,
  MaMuiHuong INT,
  MaDungTich INT,
  MaMau INT,
  MaXuatXu INT,
  MaChatLieu INT,
  DonGia DECIMAL(18, 2),
  TrangThai BIT,
  FOREIGN KEY (MaSanPham) REFERENCES SanPham(MaSanPham),
  FOREIGN KEY (MaLoai) REFERENCES LoaiSanPham(MaLoai),
  FOREIGN KEY (MaMuiHuong) REFERENCES MuiHuong(MaMuiHuong),
  FOREIGN KEY (MaDungTich) REFERENCES DungTich(MaDungTich),
  FOREIGN KEY (MaMau) REFERENCES MauSac(MaMau),
  FOREIGN KEY (MaXuatXu) REFERENCES XuatXu(MaXuatXu),
  FOREIGN KEY (MaChatLieu) REFERENCES ChatLieuVoChai(MaChatLieu)
);

-- 10. Khuyến mãi
CREATE TABLE KhuyenMai (
  MaKM INT PRIMARY KEY,
  Ten NVARCHAR(100),
  GiaTri INT,
  NgayBatDau DATE,
  NgayKetThuc DATE,
  TrangThai BIT
);

-- 11. Sản phẩm khuyến mãi
CREATE TABLE SanPhamKhuyenMai (
  MaKM INT,
  MaSanPham INT,
  NgayApDung DATE,
  NgayKetThuc DATE,
  GiaKhuyenMai DECIMAL(18, 2),
  PRIMARY KEY (MaKM, MaSanPham),
  FOREIGN KEY (MaKM) REFERENCES KhuyenMai(MaKM),
  FOREIGN KEY (MaSanPham) REFERENCES SanPham(MaSanPham)
);

-- 12. Khách hàng
CREATE TABLE KhachHang (
  ID INT PRIMARY KEY,
  Ten NVARCHAR(100),
  SDT NVARCHAR(20),
  DiaChi NVARCHAR(255),
  Email NVARCHAR(100),
  GioiTinh BIT,
  NgaySinh DATE,
  NgayTao DATE,
  TrangThai BIT
);

-- 13. Nhân viên
CREATE TABLE NhanVien (
  ID INT PRIMARY KEY,
  Ten NVARCHAR(100),
  Email NVARCHAR(100),
  DiaChi NVARCHAR(255),
  ChucVu NVARCHAR(100),
  MatKhau NVARCHAR(100),
  GioiTinh BIT,
  NgaySinh DATE,
  NgayTao DATE,
  TrangThai BIT
);

-- 14. Hình thức thanh toán
CREATE TABLE HinhThucThanhToan (
  MaHinhThuc INT PRIMARY KEY,
  TenHinhThuc NVARCHAR(100)
);

-- 15. Trạng thái thanh toán
CREATE TABLE TrangThaiThanhToan (
  MaTrangThai INT PRIMARY KEY,
  Ten NVARCHAR(100)
);

-- 16. Hóa đơn
CREATE TABLE HoaDon (
  MaHD INT PRIMARY KEY,
  MaKH INT,
  MaNhanVien INT,
  MaKhuyenMai INT,
  MaHinhThuc INT,
  NgayTao DATE,
  NgayCapNhat DATE,
  TrangThaiThanhToan INT,
  TrangThaiGiaoHang NVARCHAR(100),
  FOREIGN KEY (MaKH) REFERENCES KhachHang(ID),
  FOREIGN KEY (MaNhanVien) REFERENCES NhanVien(ID),
  FOREIGN KEY (MaKhuyenMai) REFERENCES KhuyenMai(MaKM),
  FOREIGN KEY (MaHinhThuc) REFERENCES HinhThucThanhToan(MaHinhThuc),
  FOREIGN KEY (TrangThaiThanhToan) REFERENCES TrangThaiThanhToan(MaTrangThai)
);

-- 17. Chi tiết hóa đơn
CREATE TABLE HoaDonChiTiet (
  ID INT PRIMARY KEY,
  MaHD INT,
  MaSPCT INT,
  SoLuong INT,
  DonGia DECIMAL(18, 2),
  FOREIGN KEY (MaHD) REFERENCES HoaDon(MaHD),
  FOREIGN KEY (MaSPCT) REFERENCES SanPhamChiTiet(ID)
);

-- 18. Banner trang chủ
CREATE TABLE Banner (
  ID INT PRIMARY KEY,
  TieuDe NVARCHAR(255),
  HinhAnh NVARCHAR(255),
  MoTa NVARCHAR(255),
  TrangThai BIT
);

-- 19. Bộ sưu tập
CREATE TABLE BoSuuTap (
  ID INT PRIMARY KEY,
  Ten NVARCHAR(255),
  MoTa NVARCHAR(255),
  Anh NVARCHAR(255),
  TrangThai BIT
);

-- 20. Sản phẩm - Bộ sưu tập
CREATE TABLE SanPham_BoSuuTap (
  MaSanPham INT,
  IDBoSuuTap INT,
  PRIMARY KEY (MaSanPham, IDBoSuuTap),
  FOREIGN KEY (MaSanPham) REFERENCES SanPham(MaSanPham),
  FOREIGN KEY (IDBoSuuTap) REFERENCES BoSuuTap(ID)
);
-- INSERT cho các bảng phụ (1-7)
INSERT INTO ThuongHieu VALUES (1, N'Chanel'), (2, N'Dior'), (3, N'Gucci');
INSERT INTO MuiHuong VALUES (1, N'Hương hoa'), (2, N'Hương gỗ'), (3, N'Hương trái cây');
INSERT INTO LoaiSanPham VALUES (1, N'Nước hoa nam'), (2, N'Nước hoa nữ');
INSERT INTO DungTich VALUES (1, N'10ml'), (2, N'50ml'), (3, N'100ml');
INSERT INTO XuatXu VALUES (1, N'Pháp'), (2, N'Ý'), (3, N'Mỹ');
INSERT INTO MauSac VALUES (1, N'Đỏ'), (2, N'Trắng'), (3, N'Xanh');
INSERT INTO ChatLieuVoChai VALUES (1, N'Thủy tinh'), (2, N'Nhựa');

-- Sản phẩm (8)
INSERT INTO SanPham VALUES
(1, N'Chanel No.5', 'anh1.jpg', N'Cổ điển, sang trọng', '2025-01-01', 3000000, 1, 1),
(2, N'Dior Sauvage', 'anh2.jpg', N'Nam tính, mạnh mẽ', '2025-02-01', 2800000, 1, 2),
(3, N'Chanel No.5', 'anh3.jpg', N'Cổ điển, sang trọng', '2025-01-01', 3000000, 1, 1),
(4, N'Dior Sauvage', 'anh4.jpg', N'Nam tính, mạnh mẽ', '2025-02-01', 2800000, 1, 2);
-- Chi tiết sản phẩm (9)
INSERT INTO SanPhamChiTiet VALUES
(1, 1, 2, 1, 2, 2, 1, 1, 3000000, 1),
(2, 2, 1, 2, 1, 1, 2, 2, 2800000, 1);

-- Khuyến mãi (10)
INSERT INTO KhuyenMai VALUES (1, N'Tết Sale', 10, '2025-01-01', '2025-02-01', 1);

-- Sản phẩm khuyến mãi (11)
INSERT INTO SanPhamKhuyenMai VALUES (1, 1, '2025-01-01', '2025-01-31', 2700000);

-- Khách hàng (12)
INSERT INTO KhachHang VALUES (1, N'Nguyễn Văn A', '0901234567', N'Hà Nội', 'a@gmail.com', 1, '1990-01-01', '2025-01-10', 1);

-- Nhân viên (13)
INSERT INTO NhanVien VALUES (1, N'Lê Thị B', 'nvb@gmail.com', N'HCM', N'Quản lý', '123456', 0, '1985-02-02', '2025-01-05', 1);

-- Hình thức thanh toán (14)
INSERT INTO HinhThucThanhToan VALUES (1, N'Tiền mặt'), (2, N'Chuyển khoản');

-- Trạng thái thanh toán (15)
INSERT INTO TrangThaiThanhToan VALUES (1, N'Chưa thanh toán'), (2, N'Đã thanh toán');

-- Hóa đơn (16)
INSERT INTO HoaDon VALUES (1, 1, 1, 1, 1, '2025-01-15', '2025-01-16', 2, N'Đã giao');

-- Chi tiết hóa đơn (17)
INSERT INTO HoaDonChiTiet VALUES (1, 1, 1, 1, 2700000);

-- Banner (18)
INSERT INTO Banner VALUES (1, N'Giảm giá Tết', 'banner1.jpg', N'Ưu đãi cực sốc dịp Tết', 1);
INSERT INTO Banner VALUES (2, N'Giảm giá Tết', 'banner2.jpg', N'Ưu đãi cực sốc dịp Tết', 1);
INSERT INTO Banner VALUES (3, N'Giảm giá Tết', 'banner3.jpg', N'Ưu đãi cực sốc dịp Tết', 1);
INSERT INTO Banner VALUES (4, N'Giảm giá Tết', 'banner4.jpg', N'Ưu đãi cực sốc dịp Tết', 1);

-- Bộ sưu tập (19)
INSERT INTO BoSuuTap VALUES (1, N'Xuân Hè 2025', N'Nước hoa mùa xuân', 'spring.jpg', 1);

-- Sản phẩm - Bộ sưu tập (20)
INSERT INTO SanPham_BoSuuTap VALUES (1, 1);

SELECT * FROM SanPham
