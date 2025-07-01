const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Serve ảnh tĩnh cho từng thư mục con
app.use('/assets/anh', express.static(path.join(__dirname, 'public/assets/anh')));
app.use('/assets/banner', express.static(path.join(__dirname, 'public/assets/banner')));

// ROUTES
app.use('/api/banner', require('./routes/Banner.route'));
app.use('/api/sanpham', require('./routes/SanPham.route'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server đang chạy tại http://localhost:${PORT}`);
});
