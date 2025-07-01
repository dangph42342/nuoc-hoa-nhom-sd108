"use client";

import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          GENTLEMAN
        </div>

        {/* Navigation menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="/">Trang chủ</a>
        <a href="/trangChu/sanpham">Sản phẩm</a>
          <a href="/thuong-hieu">Thương hiệu</a>
          <a href="/ve-chung-toi">Về chúng tôi</a>
          <a href="/lien-he">Liên hệ</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-gray-800 text-lg">
          <FaSearch className="cursor-pointer hover:text-black" />
          <FaHeart className="cursor-pointer hover:text-black" />
          <FaShoppingCart className="cursor-pointer hover:text-black" />
        </div>
      </div>
      {/* Đường kẻ dưới nav */}
      <div className="h-1 bg-gradient-to-r from-[#0f172a] to-[#0a0a0a]" />
    </header>
  );
}
