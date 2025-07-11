"use client"; // BẮT BUỘC nếu bạn dùng useState, useEffect, axios...

// ✅ Điều chỉnh đường dẫn import
import Banner from "./trangChu/banner";
import SanPham from "../components/SanPham";   // Sửa lại đúng thư mục con trong trangChu
import Navbar from "./trangChu/navbar";             // Đang nằm trong trangChu
import Footer from "./trangChu/footer";
import Newsletter from "./trangChu/newLetter";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <SanPham />
      <Newsletter />
      <Footer />
    </div>
  );
}
