function validateSanPham(data) {
  const errors = [];

  if (!data.Ten || typeof data.Ten !== 'string' || data.Ten.trim() === '') {
    errors.push('Tên sản phẩm không hợp lệ');
  }

  if (!data.GiaTien || isNaN(data.GiaTien)) {
    errors.push('Giá tiền phải là một số');
  }

  if (!data.MaThuongHieu || isNaN(data.MaThuongHieu)) {
    errors.push('Mã thương hiệu không hợp lệ');
  }

  return errors;
}

module.exports = { validateSanPham };
