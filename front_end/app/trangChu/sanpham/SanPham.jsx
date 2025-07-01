"use client";

import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function SanPham() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/sanpham")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error("Lỗi khi lấy sản phẩm:", err);
        setProducts([]);
      });
  }, []);

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">Danh mục sản phẩm Nổi Bật</h2>
      <p className="text-center text-gray-500 mb-10">
        Khám phá các dòng nước hoa phù hợp với phong cách và cá tính của bạn.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.MaSanPham}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative group"
          >
            {/* Image */}
            <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={`http://localhost:5000/assets/anh/${product.Anh}`}
                alt={product.Ten}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              {/* Sale Badge - nếu cần */}
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow">
                -10%
              </span>
              {/* Favorite icon */}
              <button className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition">
                ♡
              </button>
            </div>

            {/* Info */}
            <div className="p-4">
              <p className="text-sm text-gray-400 mb-1">{product.ThuongHieu || "Thương hiệu"}</p>
              <h3 className="text-lg font-bold text-gray-800">{product.Ten}</h3>

              <div className="mt-2 text-yellow-400 text-sm flex items-center gap-1">
                ★★★★☆ <span className="text-gray-500 ml-1 text-xs">(4.8)</span>
              </div>

              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="text-lg font-bold text-black">
                    {Number(product.GiaTien).toLocaleString("vi-VN")}đ
                  </span>
                  <span className="text-gray-400 line-through text-sm ml-2">
                    {Number(product.GiaTien * 1.1).toLocaleString("vi-VN")}đ
                  </span>
                </div>
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-gray-700 transition">
                  <FaShoppingCart />
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
      <h2 className="text-3xl font-bold text-center mb-2">Danh mục sản phẩm bán chạy</h2>
      <p className="text-center text-gray-500 mb-10">
        Khám phá các dòng nước hoa phù hợp với phong cách và cá tính của bạn.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.MaSanPham}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative group"
          >
            {/* Image */}
            <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={`http://localhost:5000/assets/anh/${product.Anh}`}
                alt={product.Ten}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              {/* Sale Badge - nếu cần */}
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow">
                -10%
              </span>
              {/* Favorite icon */}
              <button className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition">
                ♡
              </button>
            </div>

            {/* Info */}
            <div className="p-4">
              <p className="text-sm text-gray-400 mb-1">{product.ThuongHieu || "Thương hiệu"}</p>
              <h3 className="text-lg font-bold text-gray-800">{product.Ten}</h3>

              <div className="mt-2 text-yellow-400 text-sm flex items-center gap-1">
                ★★★★☆ <span className="text-gray-500 ml-1 text-xs">(4.8)</span>
              </div>

              <div className="flex items-center justify-between mt-3">
                <div>
                  <span className="text-lg font-bold text-black">
                    {Number(product.GiaTien).toLocaleString("vi-VN")}đ
                  </span>
                  <span className="text-gray-400 line-through text-sm ml-2">
                    {Number(product.GiaTien * 1.1).toLocaleString("vi-VN")}đ
                  </span>
                </div>
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-gray-700 transition">
                  <FaShoppingCart />
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

  );

}
