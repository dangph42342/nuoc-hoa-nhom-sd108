const GioHangModel = require('../model/GioHang.model');

const GioHangController = {
  getAll: async (req, res) => {
    try {
      const result = await GioHangModel.getAll();
      res.json(result);
    } catch (err) {
      console.error("Lỗi lấy danh sách giỏ hàng:", err);
      res.status(500).json({ message: "Lỗi server" });
    }
  },

  getById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await GioHangModel.getById(id);
      if (!result) return res.status(404).json({ message: "Không tìm thấy giỏ hàng" });
      res.json(result);
    } catch (err) {
      console.error("Lỗi lấy giỏ hàng theo ID:", err);
      res.status(500).json({ message: "Lỗi server" });
    }
  },

  create: async (req, res) => {
    try {
      const newGioHang = await GioHangModel.create(req.body);
      res.status(201).json(newGioHang);
    } catch (err) {
      console.error("Lỗi tạo giỏ hàng:", err);
      res.status(500).json({ message: "Lỗi server" });
    }
  }
};

module.exports = GioHangController;
