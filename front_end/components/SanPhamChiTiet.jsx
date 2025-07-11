export default function SanPhamChiTiet({ data }) {
  return (
    <div>
      <h1>{data.Ten}</h1>
      <img
        src={`http://localhost:5000/assets/anh/${data.Anh}`}
        alt={data.Ten}
        width={300}
      />

      <p>{data.MoTa}</p>
      <p>Giá: {Number(data.GiaTien).toLocaleString()} VNĐ</p>
      <p>Dung tích: {data.DungTich}</p>
      <p>Màu sắc: {data.MauSac}</p>
      <p>Giá chi tiết: {Number(data.DonGia).toLocaleString()} VNĐ</p>
    </div>
  );
}
