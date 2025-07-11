import SanPhamChiTietClient from "@/components/SanPhamChiTietClient";

// ✅ Hàm Page là async vì cần gọi API, và phải dùng props.params đúng cách
export default async function Page(props) {
  const { params } = props;
  const id = params?.id; // dùng optional chaining để tránh undefined

  // ✅ Kiểm tra nếu không có id thì trả lỗi
  if (!id) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  try {
    // ✅ Gọi API lấy dữ liệu chi tiết sản phẩm
    const res = await fetch(`http://localhost:5000/api/san-pham/ma/${id}`, {
      cache: "no-store", // đảm bảo luôn lấy dữ liệu mới
    });

    // ✅ Nếu lỗi HTTP (404, 500,...)
    if (!res.ok) {
      return <div>Lỗi khi tải dữ liệu sản phẩm</div>;
    }

    const data = await res.json();

    // ✅ Nếu không có sản phẩm trả về
    if (!data || data.length === 0) {
      return <div>Sản phẩm không tồn tại</div>;
    }

    // ✅ Trả component hiển thị dữ liệu
    return <SanPhamChiTietClient data={data[0]} />;
  } catch (error) {
    console.error("❌ Lỗi khi fetch dữ liệu sản phẩm:", error);
    return <div>Đã xảy ra lỗi khi tải dữ liệu</div>;
  }
}
