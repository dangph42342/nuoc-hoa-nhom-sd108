// utils/helpers.js
function formatDateToVN(dateStr) {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

module.exports = { formatDateToVN };
//controller
const { formatDateToVN } = require("../utils/helpers");

const getSanPham = async (req, res) => {
  const data = await sanPhamModel.getAll();

  const result = data.map(sp => ({
    ...sp,
    NgayTao: formatDateToVN(sp.NgayTao)
  }));

  res.json(result);
};
