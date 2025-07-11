const express = require("express");
const router = express.Router();
const vanDonCtrl = require("../controllers/VanDon.controller");

router.get("/:maHD", vanDonCtrl.xemTrangThai);

module.exports = router;
