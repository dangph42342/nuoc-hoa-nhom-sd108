"use client"; // BẮT BUỘC nếu bạn dùng useState, useEffect, axios...

import Banner from "../src/pages/trangChu/banner";
import SanPham from "../src/pages/trangChu/SanPham";
import Navbar from "../src/pages/trangChu/navbar";
import Footer from "../src/pages/trangChu/footer";
import Newsletter from "../src/pages/trangChu/newLetter";

export default function Home() {
  return (
    <div>
      
      <Navbar/>
      <Banner />
      <SanPham />
      <Newsletter/>
      <Footer/>
    </div>
  );
}
