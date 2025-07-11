const { getFullCartById } = require('../model/GioHangFull.model');

const GioHangFullController = {
  getFullCart: async (req, res) => {
    try {
      const data = await getFullCartById(req.params.id);
      res.json(data);
    } catch (err) {
      console.error("Lỗi:", err);
      res.status(500).json({ message: "Lỗi server" });
    }
  }
};
