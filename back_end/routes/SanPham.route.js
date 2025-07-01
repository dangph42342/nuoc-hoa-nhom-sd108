const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /api/sanpham
router.get('/', async (req, res) => {
  try {
    const products = await db.query('SELECT * FROM SanPham');
    res.json(products);
  } catch (err) {
    console.error("❌ Lỗi truy vấn SanPham:", err);
    res.status(500).json({ error: "Lỗi truy vấn dữ liệu sản phẩm" });
  }
});

module.exports = router;
