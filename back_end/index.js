// File: back_end/index.js

require('dotenv').config(); // Đặt lên đầu tiên

const express = require('express');
const cors = require('cors');
const router = require('./routes');
const { poolPromise } = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', router);

// Chỉ start server nếu kết nối SQL thành công
poolPromise
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Không thể khởi động server vì lỗi SQL:', err);
  });
