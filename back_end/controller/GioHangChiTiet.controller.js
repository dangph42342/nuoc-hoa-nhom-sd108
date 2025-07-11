const ChiTietModel = require('../model/GioHangChiTiet.model');

const GioHangChiTietController = {
  getByGioHangId: async (req, res) => {
    try {
      const id = parseInt(req.params.gioHangId);
      const result = await ChiTietModel.getByGioHangId(id);
      res.json(result);
    } catch (err) {
      console.error("Lỗi lấy chi tiết giỏ hàng:", err);
      res.status(500).json({ message: "Lỗi server" });
    }
  },

  create: async (req, res) => {
    try {
      const newItem = await ChiTietModel.create(req.body);
      res.status(201).json(newItem);
    } catch (err) {
      console.error("Lỗi thêm chi tiết giỏ hàng:", err);
      res.status(500).json({ message: "Lỗi server" });
    }
  }
};

module.exports = GioHangChiTietController;
