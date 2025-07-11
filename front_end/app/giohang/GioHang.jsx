"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";

export default function GioHang() {
  const [gioHang, setGioHang] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const initialized = storedCart.map((sp) => ({
      ...sp,
      quantity: sp.quantity || 1,
      checked: true, // mặc định đã chọn
    }));
    setGioHang(initialized);
  }, []);

  const handleRemove = (maSanPham) => {
    const updated = gioHang.filter((sp) => sp.MaSanPham !== maSanPham);
    setGioHang(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const handleQuantityChange = (maSanPham, delta) => {
    const updated = gioHang.map((sp) => {
      if (sp.MaSanPham === maSanPham) {
        const newQty = sp.quantity + delta;
        return { ...sp, quantity: newQty > 1 ? newQty : 1 };
      }
      return sp;
    });
    setGioHang(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const handleCheck = (maSanPham) => {
    const updated = gioHang.map((sp) =>
      sp.MaSanPham === maSanPham ? { ...sp, checked: !sp.checked } : sp
    );
    setGioHang(updated);
  };

  const tongTien = gioHang.reduce(
    (tong, sp) =>
      sp.checked ? tong + sp.GiaTien * (sp.quantity || 1) : tong,
    0
  );

  const handleCheckout = () => {
    const selected = gioHang.filter((sp) => sp.checked);
    if (selected.length === 0) {
      alert("Vui lòng chọn ít nhất 1 sản phẩm để thanh toán.");
      return;
    }
    localStorage.setItem("cart_selected", JSON.stringify(selected));
    router.push("/thanhtoan");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">🛒 Giỏ hàng của bạn</h2>

      {gioHang.length === 0 ? (
        <p>Giỏ hàng đang trống.</p>
      ) : (
        <>
          {gioHang.map((sp) => (
            <div
              key={sp.MaSanPham}
              className="flex justify-between items-center border-b py-4"
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={sp.checked}
                  onChange={() => handleCheck(sp.MaSanPham)}
                />
                <img
                  src={`http://localhost:5000/assets/anh/${sp.Anh}`}
                  alt={sp.Ten}
                  className="w-24 h-24 object-cover rounded cursor-pointer"
                  onClick={() => router.push(`/sanphamct/${sp.MaSanPham}`)}
                />
                <div>
                  <h3 className="font-semibold">{sp.Ten}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => handleQuantityChange(sp.MaSanPham, -1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{sp.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(sp.MaSanPham, 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-blue-700 font-bold">
                  {(sp.GiaTien * (sp.quantity || 1)).toLocaleString("vi-VN")} đ
                </p>
                <button
                  onClick={() => handleRemove(sp.MaSanPham)}
                  className="text-sm text-red-500 flex items-center gap-1 mt-1"
                >
                  <FaTrashAlt /> Xóa
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 text-right">
            <p className="text-lg font-bold">
              Tổng tiền: {tongTien.toLocaleString("vi-VN")} đ
            </p>
            <button
              onClick={handleCheckout}
              className="mt-4 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
            >
              Tiếp tục thanh toán
            </button>
          </div>
        </>
      )}
    </div>
  );
}
