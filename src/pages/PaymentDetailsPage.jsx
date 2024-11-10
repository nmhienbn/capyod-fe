import React, { useState } from 'react';
import { LayoutDashboard, Package, ShoppingBag, Truck, Wallet, BarChart3, Settings, Paintbrush } from 'lucide-react';
import Dashboard from '../components/store-components/Dashboard';
import MyProducts from '../components/store-components/MyProducts';
import PaymentsDetails from '../components/store-components/wallet/PaymentsDetails';

const PaymentDetailsPage = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'catalog', label: 'Catalog', icon: Package },
    { id: 'products', label: 'My Products', icon: ShoppingBag },
    { id: 'orders', label: 'Orders', icon: Truck },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'insights', label: 'Insights', icon: BarChart3 },
    { id: 'settings', label: 'Store Settings', icon: Settings },
    { id: 'branding', label: 'Branding', icon: Paintbrush },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <MyProducts />;
      case 'wallet':
        window.location.href = "/store/payment/details";
        break;
      default:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
            <p>Content for {activeSection} section</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Promotion Banner */}
      <div className="bg-[#2F3321] text-white py-3 px-4 flex justify-between items-center">
        <span className="text-sm">Get up to 20% discount on all products with Capyod Premium.</span>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm underline">Get it now</a>
          <button className="text-white" onClick={() => {}}>×</button>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
          {/* Store Dropdown */}
          <div className="p-4 border-b border-gray-200">
            <button
              onClick={() => setIsStoreDropdownOpen(!isStoreDropdownOpen)}
              className="w-full flex items-center justify-between text-left px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <Package size={20} />
                <span>My New Store</span>
              </div>
              <svg
                className={`w-4 h-4 transition-transform ${isStoreDropdownOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7 10l5 5 5-5H7z"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg mb-1 ${
                    activeSection === item.id
                      ? 'bg-[#39b75d] text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <PaymentsDetails />
      </div>
    </div>
  );
};

export default PaymentDetailsPage;