import React from "react";

const RMS = () => {
  return (
    <div className="bg-[#0b1220] min-h-screen text-slate-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <h3 className="text-3xl font-bold text-center mb-8">
          Funds & Margins (RMS)
        </h3>

        {/* TOP SUMMARY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { label: "Net Balance", value: "₹ 9,99,99,999" },
            { label: "Available Cash", value: "₹ 5,00,00,000" },
            { label: "Collateral", value: "₹ 0" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#0f172a] border border-gray-800 rounded-2xl shadow-md p-4"
            >
              <p className="text-gray-400 mb-1">{item.label}</p>
              <h5 className="text-slate-100 font-semibold">{item.value}</h5>
            </div>
          ))}
        </div>

        {/* DETAILED RMS TABLE */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-2xl shadow-md overflow-hidden">
          <div className="px-6 py-3 border-b border-gray-700 font-semibold">
            RMS Details
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <tbody>
                {[
                  "Available Intraday Pay-in",
                  "Available Limit Margin",
                  "M2M Unrealized",
                  "M2M Realized",
                  "Utilised Debits",
                  "Utilised Span",
                  "Utilised Option Premium",
                  "Utilised Holding Sales",
                  "Utilised Exposure",
                  "Utilised Turnover",
                  "Utilised Payout",
                ].map((label, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-[#131d2c]" : "bg-[#0f172a]"}
                  >
                    <td className="px-6 py-3 text-gray-400">{label}</td>
                    <td className="px-6 py-3 text-slate-100 text-right">₹ 0</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="bg-transparent border border-gray-700 hover:border-blue-500 w-full sm:w-1/2 py-3 rounded-lg font-semibold transition">
            Back to Profile
          </button>
          <button className="bg-red-600 hover:bg-red-700 w-full sm:w-1/2 py-3 rounded-lg font-semibold transition">
            Logout
          </button>
        </div>

        {/* INFO TEXT */}
        <p className="text-center text-gray-400 text-sm mt-4">
          This is a demo RMS screen with static data.
        </p>
      </div>
    </div>
  );
};

export default RMS;
