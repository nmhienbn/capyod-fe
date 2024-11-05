import React from "react";

const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Log In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#39b75d] text-white py-2 rounded hover:bg-[#6EC207] transition duration-300"
          >
            Log In
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

export default LoginModal;
