import React, { useState } from "react";
import { ArrowDownToDot } from "lucide-react";
import logo from "../assets/logo192.png";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  const openSignUpModal = () => setIsSignUpModalOpen(true);
  const closeSignUpModal = () => setIsSignUpModalOpen(false);

  return (
    <div className="bg-white shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        <div>
          <a href="/"><img src={logo} alt="Capyod Logo" className="h-8 w-8" /></a>
        </div>
        <div className="flex-none">
          <h1 className="text-2xl font-bold">
            <a href="/"><span className="text-[#39b75d]">Capyod</span></a>
          </h1>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <ul className="flex font-medium items-center gap-8 relative text-gray-600">
            {/* Catalog Item */}
            <li>
              <a
                href="/products"
                className="hover:text-[#39b75d]"
                aria-label="Catalog"
              >
                Catalog
              </a>
            </li>

            {/* How it Works Dropdown */}
            <li className="relative flex items-center group">
              <a
                href="/"
                className="hover:text-[#39b75d] cursor-pointer flex items-center"
                aria-label="How it works"
              >
                How it works
                <ArrowDownToDot className="h-4 w-4 ml-2" />
              </a>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded z-10 opacity-0 transform scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 group-hover:transform origin-top transition-all duration-300 ease-out">
                <a
                  href="/how-it-works-1"
                  className="block px-4 py-2 bg-white text-gray-600 hover:text-[#39b75d]"
                  aria-label="How Capyod Works"
                >
                  How Capyod Works
                </a>
                <a
                  href="/how-it-works-2"
                  className="block px-4 py-2 bg-white text-gray-600 hover:text-[#39b75d]"
                  aria-label="Print On Demand"
                >
                  Print On Demand
                </a>
                <a
                  href="/how-it-works-3"
                  className="block px-4 py-2 bg-white text-gray-600 hover:text-[#39b75d]"
                  aria-label="Capyod Quality Promise"
                >
                  Capyod Quality Promise
                </a>
              </div>
            </li>

            {/* Pricing Item */}
            <li>
              <a
                href="/pricing"
                className="hover:text-[#39b75d]"
                aria-label="Pricing"
              >
                Pricing
              </a>
            </li>

            {/* Blog Item */}
            <li>
              <a
                href="/browse"
                className="hover:text-[#39b75d]"
                aria-label="Blog"
              >
                Blog
              </a>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <a
                href="/"
                className="hover:text-[#39b75d] cursor-pointer"
                aria-label="Services"
              >
                Services
              </a>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded z-10 opacity-0 transform scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 group-hover:transform origin-top transition-all duration-300 ease-out">
                <a
                  href="/TranferProducts"
                  className="block px-4 py-2 bg-white text-gray-600 hover:text-[#39b75d]"
                  aria-label="Service 1"
                >
                  Tranfer Product
                </a>
                <a
                  href="/service-2"
                  className="block px-4 py-2 bg-white text-gray-600 hover:text-[#39b75d]"
                  aria-label="Service 2"
                >
                  Service 2
                </a>
              </div>
            </li>

            {/* Use Case Item */}
            <li>
              <a
                href="/browse"
                className="hover:text-[#39b75d]"
                aria-label="Use Case"
              >
                Use Case
              </a>
            </li>

            {/* Need Help Dropdown */}
            <li className="relative flex items-center group">
              <a
                href="/"
                className="hover:text-[#39b75d] cursor-pointer flex items-center"
                aria-label="Need help?"
              >
                Need help ?
              </a>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded z-10 opacity-0 transform scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 group-hover:transform origin-top transition-all duration-300 ease-out">
                <a
                  href="/faq"
                  className="block px-4 py-2 bg-white text-gray-600 hover:text-[#39b75d]"
                  aria-label="FAQ"
                >
                  FAQ
                </a>
                <a
                  href="/contact-us"
                  className="block px-4 py-2 bg-white text-gray-600 hover:text-[#39b75d]"
                  aria-label="Contact Us"
                >
                  Contact Us
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex-none flex items-center gap-2">
          <button
            onClick={openLoginModal}
            className="border border-[#39b75d] text-black px-4 py-2 rounded hover:bg-[#39b75d] hover:text-white transition duration-300"
          >
            Log In
          </button>
          <button
            onClick={openSignUpModal}
            className="bg-[#39b75d] text-black px-4 py-2 rounded hover:bg-[#6EC207] hover:text-white transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}

      {/* Sign Up Modal */}
      {isSignUpModalOpen && <SignUpModal onClose={closeSignUpModal} />}
    </div>
  );
};

export default Navbar;
