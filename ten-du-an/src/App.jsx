import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Algorithm from "./page/Algorithm/Algorithm.jsx";
import KQ from "./page/KQ/KQ.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Trang chủ - Algorithm */}
        <Route path="/" element={<Algorithm />} />

        {/* Trang kết quả */}
        <Route path="/result" element={<KQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
