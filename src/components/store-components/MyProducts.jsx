import React, { useState, useContext, useEffect } from "react";
import { Search, Plus } from "lucide-react";
import no_product from "../../assets/logo192.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import ProductItem from "./product/ProductItem";
import Cookies from "js-cookie";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const { userID } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const token = Cookies.get("accessToken");
    if (!token) return;
    try {
      const response = await fetch(`http://localhost:5000/order-items/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userID) fetchProducts();
  }, [userID]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedProducts(products.map((product) => product.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (id) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((productId) => productId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Products</h1>
        <button
          className="bg-[#2F3321] text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-[#3D442A] transition duration-300 shadow-md"
          onClick={() => navigate("create")}
        >
          <Plus size={20} className="text-white" />
          <span className="text-sm font-semibold">Create Products</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded bg-[#F5F3EE]"
          />
        </div>

        {/* Product List */}
        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : products.length > 0 ? (
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4 text-center">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="p-4 text-center">Preview</th>
                <th className="p-4 text-center">Details</th>
                <th className="p-4 text-center">Inventory</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  isSelected={selectedProducts.includes(product.id)}
                  onSelect={handleSelectProduct}
                  onUpdate={fetchProducts}
                  canEdit={true}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-12">
            <div className="mb-4 mx-auto w-48 h-48 flex items-center justify-center">
              <img
                src={no_product}
                alt="No products"
                className="max-w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              No products created yet
            </h3>
            <button
              className="bg-[#2F3321] text-white px-6 py-3 rounded hover:bg-[#3F4329]"
              onClick={() => navigate("create")}
            >
              Create Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProducts;
