const SanPhamModel = require('../model/SanPham.model');

const SanPhamController = {
  getAllSanPham: async (req, res) => {
    try {
      const data = await SanPhamModel.getAll();
      res.json(data);
    } catch (error) {
      console.error("Lỗi lấy sản phẩm:", error);
      res.status(500).json({ message: "Lỗi server khi lấy sản phẩm" });
    }
  },

  getSanPhamById: async (req, res) => {
    const id = req.params.id;
    try {
      const product = await SanPhamModel.getById(id);
      if (!product) {
        return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
      }
      res.json(product);
    } catch (error) {
      console.error("Lỗi lấy sản phẩm theo ID:", error);
      res.status(500).json({ message: "Lỗi server" });
    }
  }
};

module.exports = SanPhamController;
