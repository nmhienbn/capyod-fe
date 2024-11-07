import React from "react";
import Navbar from "../components/Navbar";
import PopularProducts from "../components/Catalog/PopularProducts";
import StarterEssentials from "../components/Catalog/StarterEssentials";
import HotNewProducts from "../components/Catalog/HotNewProducts";
import Header from "../components/Catalog/Header";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <PopularProducts />
      <StarterEssentials />
      <HotNewProducts />
    </div>
  );
};

export default ProductPage;
