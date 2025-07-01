const { pool } = require('../config/db'); // ✅ ĐÚNG nếu db.js nằm trong thư mục config


const Banner = {
  getAll: async () => {
    const request = pool.request();
    const result = await request.query('SELECT * FROM Banner WHERE TrangThai = 1');
    return result.recordset;
  },
};

module.exports = Banner;