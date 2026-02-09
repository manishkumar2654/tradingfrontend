import React from "react";

const Logout = () => {
  return (
    <div className="bg-[#0b1220] min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md bg-[#0f172a] border border-gray-800 rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-bold text-slate-100 mb-3">
          You have been logged out
        </h3>
        <p className="text-gray-400 mb-6">
          Session expired or user logged out successfully.
        </p>
        <a
          href="/login"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Go to Login
        </a>
      </div>
    </div>
  );
};

export default Logout;
