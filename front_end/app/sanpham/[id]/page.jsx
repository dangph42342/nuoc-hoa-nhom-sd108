"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function SanPhamTheoMa() {
  const { id } = useParams();
  const [sanPham, setSanPham] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:5000/api/san-pham")
      .then((res) => res.json())
      .then((data) => {
        const dsChiTiet = data.filter((sp) => sp.MaSanPham == id);
        setSanPham(dsChiTiet);
      })
      .catch((err) => console.error("❌ Lỗi lấy sản phẩm:", err));
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-4">Các phiên bản của sản phẩm</h1>
      {sanPham.map((sp) => (
        <div
          key={sp.IDChiTiet}
          className="border rounded-lg p-4 mb-4 cursor-pointer hover:shadow"
          onClick={() => router.push(`/sanphamct/${sp.IDChiTiet}`)}
        >
          <h2 className="text-xl font-semibold">{sp.Ten}</h2>
          <p><strong>Dung tích:</strong> {sp.DungTich}</p>
          <p><strong>Màu sắc:</strong> {sp.MauSac}</p>
          <p className="text-blue-600 font-bold">
            Giá: {Number(sp.DonGia).toLocaleString("vi-VN")} đ
          </p>
        </div>
      ))}
    </div>
  );
}
