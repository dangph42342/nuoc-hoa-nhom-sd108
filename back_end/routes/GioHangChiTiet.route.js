const express = require('express');
const router = express.Router();

const GioHangChiTietController = require('../controller/GioHangChiTiet.controller');

// Lấy chi tiết giỏ hàng theo MaGioHang
router.get('/:gioHangId', GioHangChiTietController.getByGioHangId);

// Thêm sản phẩm vào chi tiết giỏ hàng
router.post('/', GioHangChiTietController.create);

module.exports = router;
