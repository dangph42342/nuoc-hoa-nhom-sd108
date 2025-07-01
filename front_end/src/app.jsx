// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../app/trangChu/sanpham/SanPham"; // ← CHÍNH XÁC ĐƯỜNG DẪN

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sanpham" element={<SanPhamn/>} />
      </Routes>
    </Router>
  );
}

export default App;
