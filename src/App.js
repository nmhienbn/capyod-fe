
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import PricingPage from './pages/PricingPage';
import StorePage from './pages/StorePage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Trang chủ */}
          <Route path="/pricing" element={<PricingPage />} /> {/* Trang Pricing */}
          <Route path="/store" element={<StorePage />} /> {/* Store Page */}
          {/* Thêm các tuyến đường khác nếu cần */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
