
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import PricingPage from './pages/PricingPage';
import ProductPage from './pages/ProductPage';
import TranferProducts from './pages/TranferProducts';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Trang chủ */}
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/TranferProducts" element={<TranferProducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
