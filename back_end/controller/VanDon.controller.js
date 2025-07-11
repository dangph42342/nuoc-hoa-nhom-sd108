const vanDonModel = require("../models/VanDon.model");

exports.xemTrangThai = async (req, res) => {
  try {
    const { maHD } = req.params;
    const data = await vanDonModel.getTrangThaiGiaoHang(maHD);

    if (!data) {
      return res.status(404).json({ message: "Không tìm thấy hóa đơn" });
    }

    res.json(data);
  } catch (err) {
    console.error("❌ Lỗi controller giao hàng:", err);
    res.status(500).json({ error: "Lỗi server" });
  }
};
