// File: server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const apiRoutes = require('./routes'); // <-- Import router từ index.js
const routeIndex = require('./routes/index');

app.use(cors());
app.use(express.json());
app.use(routeIndex);

// Serve ảnh tĩnh
app.use('/assets/anh', express.static(path.join(__dirname, 'public/assets/anh')));
app.use('/assets/banner', express.static(path.join(__dirname, 'public/assets/banner')));

// Đăng ký tất cả routes dưới prefix /api
app.use('/api', apiRoutes); // ✅ Đây là cách chuẩn

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server đang chạy tại http://localhost:${PORT}`);
});
