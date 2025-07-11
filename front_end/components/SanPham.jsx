"use client";

import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function SanPham() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:5000/api/san-pham")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("❌ Dữ liệu không phải mảng:", data);
        }
      })
      .catch((err) => {
        console.error("❌ Lỗi gọi API:", err);
      });
  }, []);

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex((item) => item.MaSanPham === product.MaSanPham);

    if (index !== -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/giohang");
  };

  return (
    <section className="w-full px-4 sm:px-6 py-10 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">Danh sách sản phẩm</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.MaSanPham} className="bg-white shadow rounded p-4 flex flex-col">
          <img
            src={`http://localhost:5000/assets/anh/${product.Anh}`}
            alt={product.Ten}
            className="w-full h-64 object-cover rounded cursor-pointer mb-3"
            onClick={() => router.push(`/sanphamct/${product.MaSanPham}`)}
          />
          <h3 className="text-lg font-semibold">{product.Ten}</h3>
          <p className="text-red-600 font-bold mt-1">
            {Number(product.GiaTien).toLocaleString("vi-VN")}₫
          </p>
          <div className="flex mt-auto gap-2 pt-4">
            <button
              onClick={() => handleAddToCart(product)}
              className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              <FaShoppingCart className="inline mr-1" /> Giỏ hàng
            </button>
            <button
              onClick={() => router.push(`/sanphamct/${product.MaSanPham}`)}
              className="flex-1 border border-gray-700 py-2 rounded hover:bg-gray-800 hover:text-white"
            >
              Chi tiết
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
