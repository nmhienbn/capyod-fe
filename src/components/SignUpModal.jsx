import React, { useEffect, useState } from "react";

const SignUpModal = ({ onClose }) => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const phoneNumber = event.target.phoneNumber.value;
    const role = "user"; // Default

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, phoneNumber, role }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage("Registration successful!");
        console.log(data);
        onClose();
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Registration failed.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-[9999]">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {message && <p className="mb-4 text-red-500">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#39b75d] text-white py-2 rounded hover:bg-[#6EC207] transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-[#39b75d] hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SignUpModal;
