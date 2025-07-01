const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', async (req, res) => {
  try {
    const banners = await db.query('SELECT * FROM Banner');
    res.json(banners);
  } catch (err) {
    console.error("❌ Lỗi truy vấn banner:", err);
    res.status(500).json({ error: "Lỗi truy vấn dữ liệu banner" });
  }
});

module.exports = router;
