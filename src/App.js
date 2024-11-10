
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import PricingPage from './pages/PricingPage';
import StorePage from './pages/StorePage';
import ProductPage from './pages/ProductPage';
import TranferProducts from './pages/TranferProducts';
import Dashboard from './components/store-components/Dashboard';
import MyProducts from './components/store-components/MyProducts';
import MyOrders from './components/store-components/MyOrders';
import PaymentsPage from './components/store-components/wallet/PaymentsPage';
import PaymentsDetails from './components/store-components/wallet/PaymentsDetails';
import Transactions from './components/store-components/wallet/Transactions';
import Withdrawals from './components/store-components/wallet/Withdrawals';
import { Navigate } from 'react-router-dom';
import PopularProducts from "./components/Catalog/PopularProducts";
import StarterEssentials from "./components/Catalog/StarterEssentials";
import HotNewProducts from "./components/Catalog/HotNewProducts";
import Header from "./components/Catalog/Header";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Trang chủ */}
          <Route path="/store" element={<StorePage />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="catalog" element={
              <div>
                
      <Header />
      <PopularProducts />
      <StarterEssentials />
      <HotNewProducts />
              </div>
            } />
            <Route path="products" element={<MyProducts />} />
            <Route path="orders" element={<MyOrders />} />
            <Route path="wallet" element={<PaymentsPage />}>
              <Route path="details" element={<PaymentsDetails />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="withdrawals" element={<Withdrawals />} />
              <Route path="*" element={<Navigate to="details" replace />} />
            </Route>
            <Route path="*" element={<Navigate to="dashboard" replace />} />
          </Route>
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/TranferProducts" element={<TranferProducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
