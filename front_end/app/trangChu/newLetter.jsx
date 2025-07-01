"use client";

export default function Newsletter() {
  return (
    <section className="bg-[#fdfae9] py-16 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Đăng ký nhận tin tức
      </h2>
      <p className="text-gray-700 text-lg mb-6 max-w-xl mx-auto">
        Nhận thông tin về sản phẩm mới, ưu đãi đặc biệt và các mẹo chọn nước hoa phù hợp
      </p>
      <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Nhập email của bạn"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
        >
          Đăng ký
        </button>
      </form>
      <p className="text-sm text-gray-500 mt-4">
        Chúng tôi cam kết bảo mật thông tin cá nhân của bạn
      </p>
    </section>
  );
}
