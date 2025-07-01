"use client"; // Bắt buộc nếu dùng useState, useEffect...

import Navbar from "../navbar";
import Footer from "../footer";
import Newsletter from "../newLetter";
import SanPham from "./SanPham"; // vì nằm trong cùng thư mục

export default function SanPhamPage() {
  return (
    <div>
      <Navbar />
      <SanPham />
      <Newsletter />
      <Footer />
    </div>
  );
}
