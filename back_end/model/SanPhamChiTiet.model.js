const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');


router.get('/', async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT ct.*, sp.Ten AS TenSanPham
      FROM SanPhamChiTiet ct
      JOIN SanPham sp ON sp.MaSanPham = ct.MaSanPham
    `);
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
