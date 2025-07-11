const express = require("express");
const router = express.Router();
const { themKhachHang } = require("../controllers/KhachHang.controller");

router.post("/", themKhachHang);

module.exports = router;
