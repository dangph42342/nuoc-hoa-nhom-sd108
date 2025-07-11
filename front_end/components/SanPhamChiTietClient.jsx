"use client";
import Image from "next/image";

export default function SanPhamChiTietClient({ data }) {
  if (!data) return <p>Không có dữ liệu sản phẩm</p>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">{data.Ten}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={`http://localhost:5000/assets/anh/${data.Anh}`}
          alt={data.Ten}
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />

        <div className="flex-1 space-y-4 text-lg text-gray-700">
          <p><strong>Mô tả:</strong> {data.MoTa}</p>
          <p><strong>Giá:</strong> {Number(data.GiaTien).toLocaleString("vi-VN")} VNĐ</p>
          <p><strong>Dung tích:</strong> {data.DungTich}ml</p>
          <p><strong>Màu sắc:</strong> {data.MauSac}</p>
        </div>
      </div>
    </div>
  );
}
