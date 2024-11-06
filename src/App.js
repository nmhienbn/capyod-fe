
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Trang chủ */}
          <Route path="/pricing" element={<PricingPage />} /> {/* Trang Pricing */}
          {/* Thêm các tuyến đường khác nếu cần */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
