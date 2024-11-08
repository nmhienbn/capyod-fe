import React, { useState } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';
import no_product from "../../assets/logo192.png";

// Custom Alert Component
const Alert = ({ children, className = '' }) => (
  <div className={`rounded-lg border p-4 ${className}`}>
    {children}
  </div>
);

const AlertDescription = ({ children, className = '' }) => (
  <div className={`text-sm ${className}`}>
    {children}
  </div>
);

const MyProducts = () => {
  const [showRoutingAlert, setShowRoutingAlert] = useState(true);

  // Tabs state
  const tabs = [
    { id: 'my-products', label: 'My Products' },
    { id: 'personalizable', label: 'Personalizable' },
    { id: 'requires-action', label: 'Requires action', count: 0 }
  ];
  const [activeTab, setActiveTab] = useState('my-products');

  // Dropdown states
  const dropdowns = [
    { id: 'print-provider', label: 'Print Provider' },
    { id: 'brand', label: 'Brand' },
    { id: 'status', label: 'Status' },
    { id: 'delivery-options', label: 'Delivery options' },
    { id: 'recently-updated', label: 'Recently updated' }
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">My Products</h1>
          <button className="border border-[#39b75d] text-black px-4 py-2 rounded hover:bg-gray-50">
            My favorites
          </button>
          <button className="text-gray-600 hover:text-gray-800 flex items-center gap-1">
            Visit store <span className="text-lg">↗</span>
          </button>
        </div>
        <button className="bg-[#2F3321] text-white px-6 py-2 rounded flex items-center gap-2">
          Create order <ChevronDown size={20} />
        </button>
      </div>

      {/* Automated Routing Alert */}
      {showRoutingAlert && (
        <Alert className="mb-6 bg-[#F5F3EE] border-none">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold mb-2">Allow automated order routing</h3>
              <AlertDescription className="text-gray-600">
                In case your print provider is temporarily unavailable due to stock issues or your selected print provider is experiencing significant delays, we can automatically route the affected items to a different print provider, so your orders can arrive on time.
              </AlertDescription>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded border border-gray-300 hover:bg-gray-50">
                Enable Automated Routing
              </button>
            </div>
            <button onClick={() => setShowRoutingAlert(false)} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
        </Alert>
      )}

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex gap-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 relative ${
                activeTab === tab.id
                  ? 'text-black border-b-2 border-[#2F3321]'
                  : 'text-gray-600'
              }`}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className="ml-2 bg-gray-200 px-2 py-0.5 rounded-full text-sm">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded bg-[#F5F3EE]"
          />
        </div>

        <div className="flex gap-4">
          {dropdowns.map(dropdown => (
            <div key={dropdown.id} className="relative flex-1">
              <button className="w-full flex items-center justify-between px-4 py-2 bg-[#F5F3EE] rounded hover:bg-gray-100">
                <span className="text-gray-600">{dropdown.label}</span>
                <ChevronDown size={20} className="text-gray-400" />
              </button>
            </div>
          ))}
        </div>

        {/* Table Header */}
        <div className="flex items-center gap-4 py-4 px-2 text-gray-600">
          <input type="checkbox" className="mr-4" />
          <div className="flex-1">Product</div>
          <div className="flex-1">Inventory</div>
          <div className="flex-1">Status</div>
        </div>

        {/* Empty State */}
        <div className="text-center py-12">
          <div className="mb-4 mx-auto w-48 h-48 flex items-center justify-center">
            <img 
              src={no_product}
              alt="No products"
              className="max-w-full h-auto"
            />
          </div>
          <h3 className="text-xl font-semibold mb-4">No products created yet</h3>
          <button className="bg-[#2F3321] text-white px-6 py-3 rounded hover:bg-[#3F4329]">
            Browse Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;