"use client"; // BẮT BUỘC nếu bạn dùng useState, useEffect, axios...

import Banner from "./trangChu/banner";
import SanPham from "./trangChu/sanpham/SanPham";
import Navbar from "./trangChu/navbar";
import Footer from "./trangChu/footer";
import Newsletter from "./trangChu/newLetter";

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
