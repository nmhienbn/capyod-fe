import React from "react";
import Navbar from "../components/Navbar";
import MigrationForm from "../components/Services/TranferProducts/MigrationForm";
import Testimonials from "../components/Services/TranferProducts/Testimonials";
import BenefitsList from "../components/Services/TranferProducts/BenefitsList";
import SwitchBanner from "../components/Services/TranferProducts/SwitchBanner";
import Footer from "../components/Footer";
import Table from "../components/Table";
import Navbar2 from "../components/Navbar2";

const TranferProducts = () => {
  return (
    <div>
      <Navbar />
      <MigrationForm />
      <Testimonials />
      <BenefitsList />
      <SwitchBanner />
      <Footer />
      <Table />
      <Navbar2 />
    </div>
  );
};

export default TranferProducts;
