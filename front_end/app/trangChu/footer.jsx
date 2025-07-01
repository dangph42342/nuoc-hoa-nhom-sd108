"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Cột 1: Thông tin */}
        <div>
          <h3 className="text-2xl font-bold mb-4">GENTLEMAN</h3>
          <p className="text-gray-300 mb-4">
            Nước hoa cao cấp dành cho phái mạnh. Khẳng định phong cách, thể hiện cá tính.
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Nguyễn Huệ, Q1, TP.HCM
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> 0901 234 567
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@gentleman.vn
            </li>
          </ul>
        </div>

        {/* Cột 2: Sản phẩm */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Sản phẩm</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Nước hoa nam</li>
         
            <li>Nước hoa unisex</li>
            <li>Bộ quà tặng</li>
          </ul>
        </div>

        {/* Cột 3: Hỗ trợ */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Hỗ trợ</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Hướng dẫn mua hàng</li>
            <li>Chính sách đổi trả</li>
            <li>Chính sách bảo hành</li>
            <li>Câu hỏi thường gặp</li>
          </ul>
        </div>

        {/* Cột 4: Theo dõi */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h4>
          <div className="flex gap-4 text-xl text-gray-400">
            <FaFacebook className="hover:text-white transition" />
            <FaInstagram className="hover:text-white transition" />
            <FaTiktok className="hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
}
