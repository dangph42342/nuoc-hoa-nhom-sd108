"use client";

import { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Banner() {
  const [banners, setBanners] = useState([]);
  const timerRef = useRef(null);

  const [sliderRef, sliderInstanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/banner")
      .then((res) => res.json())
      .then((data) => setBanners(data))
      .catch((err) => console.error("Lỗi khi lấy banner:", err));
  }, []);

  // Auto slide mỗi 3 giây
  useEffect(() => {
    if (sliderInstanceRef.current && banners.length > 1) {
      timerRef.current = setInterval(() => {
        sliderInstanceRef.current.next();
      }, 3000);
    }

    return () => clearInterval(timerRef.current);
  }, [sliderInstanceRef.current, banners]);

  return (
    <section className="w-full min-h-[500px] bg-gradient-to-r from-[#0f172a] to-[#0a0a0a] text-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT TEXT */}
        <div className="space-y-6">
          <span className="bg-white/10 text-sm px-3 py-1 rounded-full inline-block font-medium">
            Bộ sưu tập mới <strong>2024</strong>
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight space-y-2">
            <span>Khẳng định </span>
            <span className="text-yellow-400 block">Phong cách</span>
            <span className="block">Của bạn</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-md">
            Khám phá bộ sưu tập nước hoa cao cấp dành riêng cho phái mạnh. Mỗi chai nước hoa là một câu chuyện, một cá tính riêng biệt.
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-400 text-black font-semibold px-5 py-3 rounded-lg hover:bg-yellow-300 transition">
              Khám phá ngay
            </button>
            <button className="border border-white px-5 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Xem bộ sưu tập
            </button>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
          {banners.length > 0 ? (
            <div ref={sliderRef} className="keen-slider h-full w-full">
              {banners.map((banner) => (
                <div key={banner.ID} className="keen-slider__slide">
                  <img
                    src={`http://localhost:5000/assets/banner/${banner.HinhAnh}`}
                    alt={banner.TieuDe}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
              Đang tải ảnh...
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
