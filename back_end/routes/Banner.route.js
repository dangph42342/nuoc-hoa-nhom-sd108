// routes/Banner.route.js
const express = require('express');
const router = express.Router();
const db = require('../config/db'); // db.query phải tồn tại

// GET /api/banner
router.get('/', async (req, res) => {
  try {
    const banners = await db.query('SELECT * FROM Banner'); // ✅ đảm bảo db.query tồn tại
    res.json(banners);
  } catch (err) {
    console.error('❌ Lỗi truy vấn banner:', err);
    res.status(500).json({ error: 'Lỗi truy vấn banner', chiTiet: err.message });
  }
});

module.exports = router;
