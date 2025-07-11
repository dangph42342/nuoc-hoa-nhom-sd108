"use client";

import { useState } from "react";

export default function TheoDoiDonHang() {
  const [maHD, setMaHD] = useState("");
  const [thongTin, setThongTin] = useState(null);
  const [loi, setLoi] = useState("");

  const handleTraCuu = async () => {
    if (!maHD) {
      setLoi("Vui lòng nhập mã đơn hàng.");
      setThongTin(null);
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/api/vandon/${maHD}`);
      if (!res.ok) {
        setLoi("Không tìm thấy đơn hàng.");
        setThongTin(null);
        return;
      }

      const data = await res.json();
      setThongTin(data);
      setLoi("");
    } catch (err) {
      console.error("❌ Lỗi lấy thông tin:", err);
      setLoi("Có lỗi xảy ra khi tra cứu.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">📦 Theo dõi đơn hàng</h2>

      <div className="flex gap-4 items-center mb-6">
        <input
          type="text"
          placeholder="Nhập mã đơn hàng (MaHD)"
          value={maHD}
          onChange={(e) => setMaHD(e.target.value)}
          className="border px-4 py-2 rounded w-full"
        />
        <button
          onClick={handleTraCuu}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Tra cứu
        </button>
      </div>

      {loi && <p className="text-red-600 mb-4">{loi}</p>}

      {thongTin && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <p><strong>Mã hóa đơn:</strong> {thongTin.MaHD}</p>
          <p><strong>Trạng thái giao hàng:</strong> {thongTin.TrangThaiGiaoHang}</p>
          <p><strong>Ngày cập nhật:</strong> {new Date(thongTin.NgayCapNhat).toLocaleDateString("vi-VN")}</p>
        </div>
      )}
    </div>
  );
}
