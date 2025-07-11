"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ThanhToanPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    ten: "",
    sdt: "",
    diaChi: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ Gửi dữ liệu về DB ở đây (POST API)
    console.log("Dữ liệu khách hàng:", form);
    router.push("/theodoidonhang"); // ✅ Chuyển sau khi gửi xong
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">📝 Nhập thông tin khách hàng</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="ten" placeholder="Họ và tên" required onChange={handleChange} className="border p-2 w-full" />
        <input name="sdt" placeholder="Số điện thoại" required onChange={handleChange} className="border p-2 w-full" />
        <input name="diaChi" placeholder="Địa chỉ giao hàng" required onChange={handleChange} className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Xác nhận đặt hàng
        </button>
      </form>
    </div>
  );
}
