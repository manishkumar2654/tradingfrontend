import React from "react";

const TokenInfo = () => {
  return (
    <div className="bg-[#0b1220] min-h-screen text-slate-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <h3 className="text-3xl font-bold text-center mb-8">Token Information</h3>

        {/* TOKENS */}
        <div className="space-y-6">

          {/* JWT Token */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 shadow-md">
            <h6 className="text-white font-semibold mb-2">JWT Token</h6>
            <textarea
              className="w-full bg-[#0b1220] border border-gray-700 rounded-lg p-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              readOnly
              value="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkdW1teS1qd3QtdG9rZW4i..."
            />
          </div>

          {/* Refresh Token */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 shadow-md">
            <h6 className="text-white font-semibold mb-2">Refresh Token</h6>
            <textarea
              className="w-full bg-[#0b1220] border border-gray-700 rounded-lg p-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              readOnly
              value="eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1OTk0ODkwMz..."
            />
          </div>

          {/* Feed Token */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 shadow-md">
            <h6 className="text-white font-semibold mb-2">Feed Token</h6>
            <textarea
              className="w-full bg-[#0b1220] border border-gray-700 rounded-lg p-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
              readOnly
              value="eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyLWZlZWQtdG9rZW4i..."
            />
          </div>

          {/* State */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 shadow-md">
            <h6 className="text-white font-semibold mb-2">State</h6>
            <input
              type="text"
              readOnly
              value="live"
              className="w-full bg-[#0b1220] border border-gray-700 rounded-lg p-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-1/2 py-3 rounded-lg font-semibold transition">
            Generate New Token
          </button>
          <button className="bg-transparent border border-gray-700 hover:border-blue-500 w-full sm:w-1/2 py-3 rounded-lg font-semibold transition">
            Go to Profile
          </button>
        </div>

        {/* INFO TEXT */}
        <div className="text-center mt-6 text-gray-400 text-sm space-y-1">
          <p>Tokens are generated after successful login using Angel One SmartAPI.</p>
          <p>This is a demo screen with static data.</p>
        </div>

      </div>

      {/* ======================= ADDITIONAL SECTIONS ======================= */}
      
     

<section className="min-h-[20vh] w-full flex items-center justify-center py-6 overflow-hidden">
  <div className="text-center px-4">
    <h1 className="text-3xl sm:text-4xl font-bold mb-1 leading-tight">
      Open a free demat and trading account online
    </h1>

    <h4 className="text-base sm:text-lg text-gray-400 leading-snug">
      Start investing brokerage free and join a community of 1.6+ crore investors
      and traders
    </h4>
  </div>
</section>


{/* ======================= MARKET SUMMARY ======================= */}
<section className="w-full px-3 sm:px-6 py-10">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Market Summary
      </h2>
      <p className="text-slate-400 text-sm mt-1">
        Quick snapshot of today’s market performance & key movements
      </p>
    </div>

    {/* SUMMARY CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

      {/* CARD */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-4">
        <p className="text-xs text-slate-400">NIFTY 50</p>
        <h4 className="text-xl font-bold text-emerald-400 mt-1">
          22,450.35
        </h4>
        <p className="text-xs text-emerald-400 mt-1">
          ▲ +124.30 (0.56%)
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-4">
        <p className="text-xs text-slate-400">BANK NIFTY</p>
        <h4 className="text-xl font-bold text-rose-400 mt-1">
          48,120.10
        </h4>
        <p className="text-xs text-rose-400 mt-1">
          ▼ −210.45 (0.43%)
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-4">
        <p className="text-xs text-slate-400">Sensex</p>
        <h4 className="text-xl font-bold text-emerald-400 mt-1">
          74,985.20
        </h4>
        <p className="text-xs text-emerald-400 mt-1">
          ▲ +356.90 (0.48%)
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-4">
        <p className="text-xs text-slate-400">India VIX</p>
        <h4 className="text-xl font-bold text-sky-400 mt-1">
          13.42
        </h4>
        <p className="text-xs text-slate-400 mt-1">
          Low volatility zone
        </p>
      </div>

    </div>
  </div>
</section>


{/* ======================= VOLUME & VOLATILITY ======================= */}
<section className="w-full px-3 sm:px-6 py-10">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Market Movers
      </h2>
      <p className="text-slate-400 text-sm mt-1">
        Stocks with highest trading activity & price volatility today
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

      {/* ================= HIGHEST VOLUME ================= */}
      <div className="lg:col-span-6">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-5">

          <h4 className="text-lg font-semibold text-white mb-4">
            Highest Volume Stocks
          </h4>

          <div className="space-y-3">
            {[
              { name: "RELIANCE", price: "2,945.30", change: "+2.14%", vol: "8.2M" },
              { name: "HDFCBANK", price: "1,642.10", change: "-1.02%", vol: "6.9M" },
              { name: "ICICIBANK", price: "1,095.85", change: "+0.88%", vol: "6.1M" },
              { name: "INFY", price: "1,598.20", change: "-0.45%", vol: "5.7M" },
            ].map((stock, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl bg-slate-900/60 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-white">
                    {stock.name}
                  </p>
                  <p className="text-xs text-slate-400">
                    Vol: {stock.vol}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-white">
                    ₹{stock.price}
                  </p>
                  <p
                    className={`text-xs ${
                      stock.change.startsWith("+")
                        ? "text-emerald-400"
                        : "text-rose-400"
                    }`}
                  >
                    {stock.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MOST VOLATILE ================= */}
      <div className="lg:col-span-6">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-5">

          <h4 className="text-lg font-semibold text-white mb-4">
            Most Volatile Stocks
          </h4>

          <div className="space-y-3">
            {[
              { name: "ADANIENT", price: "3,120.45", change: "+4.85%", range: "6.2%" },
              { name: "TATASTEEL", price: "145.80", change: "-3.40%", range: "5.1%" },
              { name: "SBIN", price: "724.30", change: "+2.96%", range: "4.7%" },
              { name: "JSWSTEEL", price: "902.60", change: "-2.15%", range: "4.3%" },
            ].map((stock, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl bg-slate-900/60 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-white">
                    {stock.name}
                  </p>
                  <p className="text-xs text-slate-400">
                    Range: {stock.range}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-white">
                    ₹{stock.price}
                  </p>
                  <p
                    className={`text-xs ${
                      stock.change.startsWith("+")
                        ? "text-emerald-400"
                        : "text-rose-400"
                    }`}
                  >
                    {stock.change}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


{/* ======================= ADVANCED CHARTS ======================= */}
<section className="w-full px-3 sm:px-6 py-12">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Advanced Charts
      </h2>
      <p className="text-slate-400 text-sm mt-1 max-w-3xl">
        Professional-grade charting tools with multi-timeframe analysis,
        technical indicators and real-time price action.
      </p>
    </div>

    {/* ================= GRID ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

      {/* ================= LEFT : MAIN CHART ================= */}
      <div className="lg:col-span-8">
        <div className="relative h-[420px] rounded-2xl border border-slate-800
                        bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">

          {/* Fake chart placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-slate-500 text-sm">
              Interactive Candlestick Chart (Demo)
            </p>
          </div>

          {/* Top controls */}
          <div className="absolute top-3 left-3 flex gap-2">
            {["1m", "5m", "15m", "1H", "1D"].map((t) => (
              <button
                key={t}
                className="px-3 py-1 rounded-lg text-xs
                           bg-slate-800/70 text-slate-300
                           hover:bg-slate-700 transition"
              >
                {t}
              </button>
            ))}
          </div>

          {/* Indicator pills */}
          <div className="absolute top-3 right-3 flex gap-2">
            {["EMA", "RSI", "MACD"].map((i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg text-xs
                           bg-slate-800/70 text-sky-400"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ================= RIGHT : TOOLS ================= */}
      <div className="lg:col-span-4 space-y-4">

        {[
          {
            title: "Multi-Timeframe Analysis",
            text:
              "Analyze price action across multiple timeframes to identify trends and reversals."
          },
          {
            title: "Technical Indicators",
            text:
              "Apply EMA, RSI, MACD, Bollinger Bands and custom indicators."
          },
          {
            title: "Drawing Tools",
            text:
              "Trendlines, Fibonacci retracements, channels and support-resistance zones."
          },
        
        ].map((tool, i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-800
                       bg-gradient-to-b from-slate-900 to-slate-950 p-4"
          >
            <h6 className="text-sm font-semibold text-white mb-1">
              {tool.title}
            </h6>
            <p className="text-xs text-slate-400 leading-relaxed">
              {tool.text}
            </p>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>





{/* ======================= BIO CHART ======================= */}
<section className="w-full px-3 sm:px-6 py-12">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Bio Chart Analysis
      </h2>
      <p className="text-slate-400 text-sm mt-1 max-w-3xl">
        Market breadth indicators showing internal market strength,
        participation and momentum across stocks.
      </p>
    </div>

    {/* ================= GRID ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

      {/* ================= LEFT : BIO CHART ================= */}
      <div className="lg:col-span-7">
        <div
          className="relative h-[380px] rounded-2xl border border-slate-800
                     bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden"
        >
          {/* Chart Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-slate-500 text-sm">
              Market Breadth / Bio Chart (Demo)
            </p>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 flex gap-3">
            <span className="flex items-center gap-1 text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              Advancing
            </span>
            <span className="flex items-center gap-1 text-xs text-rose-400">
              <span className="h-2 w-2 rounded-full bg-rose-400"></span>
              Declining
            </span>
            <span className="flex items-center gap-1 text-xs text-sky-400">
              <span className="h-2 w-2 rounded-full bg-sky-400"></span>
              Unchanged
            </span>
          </div>
        </div>
      </div>

      {/* ================= RIGHT : INFO ================= */}
      <div className="lg:col-span-5 space-y-4">

        {[
          {
            title: "Advance–Decline Ratio",
            text:
              "Compares number of advancing stocks versus declining stocks to assess market strength."
          },
          {
            title: "Market Participation",
            text:
              "Shows how broadly the market is moving rather than index-only movement."
          },
          {
            title: "Momentum Confirmation",
            text:
              "Helps confirm trend continuation or potential reversals."
          },
      
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-800
                       bg-gradient-to-b from-slate-900 to-slate-950 p-4"
          >
            <h6 className="text-sm font-semibold text-white mb-1">
              {item.title}
            </h6>
            <p className="text-xs text-slate-400 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>

<section className="w-full bg-slate-950 py-14 px-4">
  <div className="max-w-7xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
      FX Blue Expert Advisors
    </h2>

    <p className="text-slate-400 max-w-3xl mx-auto mb-12">
      Professional automated trading systems powered by FX Blue.
      Monitor strategies, analyze performance, and manage risk
      with advanced algorithmic tools.
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 hover:-translate-y-1 transition">
        <h3 className="text-lg font-semibold text-slate-100 mb-2">
          Automated Strategies
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Execute trades automatically based on predefined rules,
          indicators, and live market conditions.
        </p>
      </div>

      <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 hover:-translate-y-1 transition">
        <h3 className="text-lg font-semibold text-slate-100 mb-2">
          Advanced Analytics
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Track drawdowns, win ratio, profit factor, equity curve,
          and complete historical performance.
        </p>
      </div>

      <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 hover:-translate-y-1 transition">
        <h3 className="text-lg font-semibold text-slate-100 mb-2">
          Risk Management
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Control exposure with intelligent stop-loss, lot sizing,
          and capital protection mechanisms.
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-12">
      <button className="px-7 py-3 rounded-full bg-slate-800 text-slate-100 hover:bg-slate-700 transition">
        Explore FX Blue Tools
      </button>
    </div>

  </div>
</section>






{/* ======================= MARKET SNAPSHOT ======================= */}
<section className="w-full bg-slate-950 px-4 sm:px-6 py-12">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Market Snapshot
      </h2>
      <p className="text-slate-400 text-sm mt-1">
        Key global and domestic indicators shaping today’s markets
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Crypto Market Cap */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-5 hover:-translate-y-1 transition">
        <h4 className="text-sm font-semibold text-slate-200 mb-2">
          Crypto Market Cap
        </h4>

        <div className="text-2xl font-bold text-green-400 mb-1">
          $1.87T
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          Total valuation of all cryptocurrencies, reflecting overall
          market strength and investor sentiment.
        </p>
      </div>

      {/* USD to INR */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-5 hover:-translate-y-1 transition">
        <h4 className="text-sm font-semibold text-slate-200 mb-2">
          USD → INR
        </h4>

        <div className="text-2xl font-bold text-yellow-400 mb-1">
          ₹83.12
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          Exchange rate impacting equities, imports, exports and
          foreign investment flows.
        </p>
      </div>

      {/* India 10Y Yield */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-5 hover:-translate-y-1 transition">
        <h4 className="text-sm font-semibold text-slate-200 mb-2">
          India 10Y Yield
        </h4>

        <div className="text-2xl font-bold text-red-400 mb-1">
          7.18%
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          Benchmark government bond yield indicating long-term
          interest rate and inflation expectations.
        </p>
      </div>

    </div>

  </div>
</section>





{/* ======================= ECONOMIC CALENDAR ======================= */}
<section className="w-full bg-slate-950 px-4 sm:px-6 py-12">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Economic Calendar
      </h2>
      <p className="text-slate-400 text-sm mt-1">
        Track upcoming economic events that can impact global markets
      </p>
    </div>

    {/* Calendar Table */}
    <div className="overflow-x-auto rounded-2xl border border-slate-800">
      <table className="w-full text-sm text-left text-slate-300">
        <thead className="bg-slate-900 text-slate-400 uppercase text-xs">
          <tr>
            <th className="px-4 py-3">Time</th>
            <th className="px-4 py-3">Country</th>
            <th className="px-4 py-3">Event</th>
            <th className="px-4 py-3 text-center">Impact</th>
            <th className="px-4 py-3 text-center">Actual</th>
            <th className="px-4 py-3 text-center">Forecast</th>
            <th className="px-4 py-3 text-center">Previous</th>
          </tr>
        </thead>

        <tbody className="bg-slate-950">
          {/* Row */}
          <tr className="border-t border-slate-800 hover:bg-slate-900/50 transition">
            <td className="px-4 py-3 text-slate-400">10:30</td>
            <td className="px-4 py-3">India 🇮🇳</td>
            <td className="px-4 py-3">
              CPI Inflation (YoY)
            </td>
            <td className="px-4 py-3 text-center">
              <span className="px-2 py-1 text-xs rounded-full bg-red-500/10 text-red-400">
                High
              </span>
            </td>
            <td className="px-4 py-3 text-center">—</td>
            <td className="px-4 py-3 text-center">5.2%</td>
            <td className="px-4 py-3 text-center">5.1%</td>
          </tr>

          <tr className="border-t border-slate-800 hover:bg-slate-900/50 transition">
            <td className="px-4 py-3 text-slate-400">14:00</td>
            <td className="px-4 py-3">USA 🇺🇸</td>
            <td className="px-4 py-3">
              FOMC Meeting Minutes
            </td>
            <td className="px-4 py-3 text-center">
              <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-400">
                Medium
              </span>
            </td>
            <td className="px-4 py-3 text-center">—</td>
            <td className="px-4 py-3 text-center">—</td>
            <td className="px-4 py-3 text-center">—</td>
          </tr>

          <tr className="border-t border-slate-800 hover:bg-slate-900/50 transition">
            <td className="px-4 py-3 text-slate-400">18:30</td>
            <td className="px-4 py-3">UK 🇬🇧</td>
            <td className="px-4 py-3">
              GDP Growth Rate
            </td>
            <td className="px-4 py-3 text-center">
              <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400">
                Low
              </span>
            </td>
            <td className="px-4 py-3 text-center">—</td>
            <td className="px-4 py-3 text-center">0.3%</td>
            <td className="px-4 py-3 text-center">0.2%</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</section>




{/* ======================= FUTURES MARKET ======================= */}
<section className="w-full bg-slate-950 px-4 sm:px-6 py-12">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Futures Market Overview
      </h2>
      <p className="text-slate-400 text-sm mt-1">
        Live price action and trends across energy and metal futures
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* ================= ENERGY FUTURES ================= */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6">

        <h3 className="text-lg font-semibold text-slate-100 mb-4">
          Energy Futures
        </h3>

        <div className="space-y-3">

          {/* Row */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 transition">
            <div>
              <p className="text-sm font-medium text-slate-200">Crude Oil</p>
              <span className="text-xs text-slate-400">WTI · USD</span>
            </div>

            <div className="text-right">
              <p className="text-sm font-semibold text-green-400">78.42</p>
              <span className="text-xs text-green-400">+0.85%</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 transition">
            <div>
              <p className="text-sm font-medium text-slate-200">Brent Oil</p>
              <span className="text-xs text-slate-400">ICE · USD</span>
            </div>

            <div className="text-right">
              <p className="text-sm font-semibold text-red-400">82.10</p>
              <span className="text-xs text-red-400">-0.42%</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 transition">
            <div>
              <p className="text-sm font-medium text-slate-200">Natural Gas</p>
              <span className="text-xs text-slate-400">NYMEX · USD</span>
            </div>

            <div className="text-right">
              <p className="text-sm font-semibold text-green-400">2.48</p>
              <span className="text-xs text-green-400">+1.32%</span>
            </div>
          </div>

        </div>
      </div>

      {/* ================= METAL FUTURES ================= */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6">

        <h3 className="text-lg font-semibold text-slate-100 mb-4">
          Metal Futures
        </h3>

        <div className="space-y-3">

          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 transition">
            <div>
              <p className="text-sm font-medium text-slate-200">Gold</p>
              <span className="text-xs text-slate-400">COMEX · USD</span>
            </div>

            <div className="text-right">
              <p className="text-sm font-semibold text-green-400">2038.6</p>
              <span className="text-xs text-green-400">+0.21%</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 transition">
            <div>
              <p className="text-sm font-medium text-slate-200">Silver</p>
              <span className="text-xs text-slate-400">COMEX · USD</span>
            </div>

            <div className="text-right">
              <p className="text-sm font-semibold text-red-400">24.68</p>
              <span className="text-xs text-red-400">-0.56%</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 transition">
            <div>
              <p className="text-sm font-medium text-slate-200">Copper</p>
              <span className="text-xs text-slate-400">LME · USD</span>
            </div>

            <div className="text-right">
              <p className="text-sm font-semibold text-green-400">4.12</p>
              <span className="text-xs text-green-400">+0.74%</span>
            </div>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>





{/* ======================= FOREX PERFORMANCE ======================= */}
<section className="w-full bg-slate-950 px-4 sm:px-6 py-12">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Forex Performance
      </h2>
      <p className="text-slate-400 text-sm mt-1">
        Performance overview of major currency pairs in global forex markets
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* EUR/USD */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-5 hover:-translate-y-1 transition">
        <h4 className="text-sm font-semibold text-slate-200 mb-1">
          EUR / USD
        </h4>

        <div className="flex items-end justify-between mb-2">
          <span className="text-2xl font-bold text-green-400">
            1.0842
          </span>
          <span className="text-sm text-green-400">
            +0.36%
          </span>
        </div>

        <p className="text-xs text-slate-400">
          Euro gaining strength against US Dollar amid easing inflation outlook.
        </p>
      </div>

      {/* GBP/USD */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-5 hover:-translate-y-1 transition">
        <h4 className="text-sm font-semibold text-slate-200 mb-1">
          GBP / USD
        </h4>

        <div className="flex items-end justify-between mb-2">
          <span className="text-2xl font-bold text-red-400">
            1.2715
          </span>
          <span className="text-sm text-red-400">
            -0.18%
          </span>
        </div>

        <p className="text-xs text-slate-400">
          Pound under pressure ahead of key UK economic data releases.
        </p>
      </div>

      {/* USD/INR */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-5 hover:-translate-y-1 transition">
        <h4 className="text-sm font-semibold text-slate-200 mb-1">
          USD / INR
        </h4>

        <div className="flex items-end justify-between mb-2">
          <span className="text-2xl font-bold text-green-400">
            83.12
          </span>
          <span className="text-sm text-green-400">
            +0.09%
          </span>
        </div>

        <p className="text-xs text-slate-400">
          Dollar strengthens slightly against Rupee on global risk-off sentiment.
        </p>
      </div>

      {/* USD/JPY */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-5 hover:-translate-y-1 transition">
        <h4 className="text-sm font-semibold text-slate-200 mb-1">
          USD / JPY
        </h4>

        <div className="flex items-end justify-between mb-2">
          <span className="text-2xl font-bold text-red-400">
            148.76
          </span>
          <span className="text-sm text-red-400">
            -0.42%
          </span>
        </div>

        <p className="text-xs text-slate-400">
          Yen rebounds as traders assess Bank of Japan policy stance.
        </p>
      </div>

      {/* AUD/USD */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-5 hover:-translate-y-1 transition">
        <h4 className="text-sm font-semibold text-slate-200 mb-1">
          AUD / USD
        </h4>

        <div className="flex items-end justify-between mb-2">
          <span className="text-2xl font-bold text-green-400">
            0.6584
          </span>
          <span className="text-sm text-green-400">
            +0.51%
          </span>
        </div>

        <p className="text-xs text-slate-400">
          Australian Dollar supported by rising commodity prices.
        </p>
      </div>

      {/* EUR/GBP */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-5 hover:-translate-y-1 transition">
        <h4 className="text-sm font-semibold text-slate-200 mb-1">
          EUR / GBP
        </h4>

        <div className="flex items-end justify-between mb-2">
          <span className="text-2xl font-bold text-red-400">
            0.8531
          </span>
          <span className="text-sm text-red-400">
            -0.27%
          </span>
        </div>

        <p className="text-xs text-slate-400">
          Euro weakens slightly against Pound in short-term consolidation.
        </p>
      </div>

    </div>

  </div>
</section>




{/* ======================= FULLY EQUIPPED TRADING ======================= */}
<section className="w-full bg-slate-950 px-4 sm:px-6 py-16">
  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
          Fully Equipped Trading Platform
        </h2>

        <p className="text-slate-400 max-w-xl mb-6">
          Trade confidently with a complete suite of professional tools designed
          for modern traders. From real-time market data to advanced analytics,
          everything you need is built into one powerful platform.
        </p>

        {/* Feature list */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-green-400"></span>
            <p className="text-slate-300 text-sm">
              Real-time market prices across Forex, Crypto, Commodities & Indices
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-green-400"></span>
            <p className="text-slate-300 text-sm">
              Advanced charts with indicators, drawing tools and multiple timeframes
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-green-400"></span>
            <p className="text-slate-300 text-sm">
              Risk management tools including stop-loss, take-profit and alerts
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-green-400"></span>
            <p className="text-slate-300 text-sm">
              Economic calendar, market news and performance insights in one place
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400 transition">
            Start Trading
          </button>

          <button className="px-6 py-3 rounded-full border border-slate-700 text-slate-200 hover:bg-slate-900 transition">
            Explore Features
          </button>
        </div>
      </div>

      {/* RIGHT VISUAL / MOCK */}
      <div className="relative">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-lg">
          
          <h4 className="text-slate-200 text-sm font-semibold mb-4">
            Live Market Overview
          </h4>

          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">EUR / USD</span>
              <span className="text-green-400">1.0842</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-slate-400">BTC / USD</span>
              <span className="text-red-400">42,180</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Gold</span>
              <span className="text-green-400">2038.6</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Crude Oil</span>
              <span className="text-green-400">78.42</span>
            </div>
          </div>

        </div>

        {/* glow */}
        <div className="absolute -inset-1 bg-green-500/10 blur-2xl rounded-2xl -z-10"></div>
      </div>

    </div>

  </div>
</section>




{/* ======================= INDIAN STOCKS & COMMUNITY TRENDS ======================= */}
<section className="w-full bg-slate-950 px-4 sm:px-6 py-14">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Indian Stocks & Community Trends
      </h2>
      <p className="text-slate-400 text-sm mt-1">
        Track market movers and see what traders across the community are watching
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

      {/* ================= LEFT : INDIAN STOCKS ================= */}
      <div className="lg:col-span-7 space-y-4">
        {[
          { name: "Reliance Industries", price: "2,845.40", chg: "+1.24%" },
          { name: "TCS", price: "3,982.10", chg: "-0.48%" },
          { name: "HDFC Bank", price: "1,586.75", chg: "+0.92%" },
          { name: "Infosys", price: "1,672.30", chg: "+1.68%" },
        ].map((stock, i) => (
          <div
            key={i}
            className="flex items-center justify-between
                       rounded-xl border border-slate-800
                       bg-gradient-to-b from-slate-900 to-slate-950
                       px-4 py-3 hover:border-sky-400/40 transition"
          >
            <div>
              <h6 className="text-slate-200 font-medium text-sm">
                {stock.name}
              </h6>
              <p className="text-xs text-slate-400">NSE • Equity</p>
            </div>

            <div className="text-right">
              <p className="text-slate-200 font-semibold text-sm">
                ₹ {stock.price}
              </p>
              <p
                className={`text-xs ${
                  stock.chg.startsWith("+")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {stock.chg}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= RIGHT : COMMUNITY TRENDS ================= */}
      <div className="lg:col-span-5 space-y-4">
        {[
          {
            title: "#BANKNIFTY Breakout",
            desc: "High call buying seen near resistance levels.",
          },
          {
            title: "#Reliance Results",
            desc: "Community expects strong earnings momentum.",
          },
          {
            title: "#IT Stocks Rally",
            desc: "Infosys and TCS showing renewed buying interest.",
          },
          {
            title: "#Midcap Volatility",
            desc: "Traders cautious amid high intraday swings.",
          },
        ].map((trend, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-800
                       bg-gradient-to-b from-slate-900 to-slate-950
                       p-4 hover:border-violet-400/40 transition"
          >
            <h6 className="text-slate-200 text-sm font-semibold mb-1">
              {trend.title}
            </h6>
            <p className="text-xs text-slate-400 leading-relaxed">
              {trend.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>





{/* ======================= INTERESTED? LEARN MORE ======================= */}
<section className="w-full bg-slate-950 px-4 sm:px-6 py-16">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">
        Interested? Learn More
      </h2>
      <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
        Explore different trading opportunities and choose what fits your
        investment style and financial goals.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Trading */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6 hover:-translate-y-1 transition">
        <h4 className="text-lg font-semibold text-white mb-2">
          Trading
        </h4>
        <p className="text-sm text-slate-400 mb-5">
          Trade stocks, indices and commodities with real-time data and powerful
          analytical tools.
        </p>

        <button className="text-sky-400 text-sm font-medium hover:underline">
          Learn More →
        </button>
      </div>

      {/* Forex Trading */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6 hover:-translate-y-1 transition">
        <h4 className="text-lg font-semibold text-white mb-2">
          Forex Trading
        </h4>
        <p className="text-sm text-slate-400 mb-5">
          Access global currency markets with advanced charts, indicators and
          professional execution.
        </p>

        <button className="text-sky-400 text-sm font-medium hover:underline">
          Learn More →
        </button>
      </div>

      {/* Funds */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6 hover:-translate-y-1 transition">
        <h4 className="text-lg font-semibold text-white mb-2">
          Funds
        </h4>
        <p className="text-sm text-slate-400 mb-5">
          Invest in diversified funds and manage risk with long-term growth
          strategies.
        </p>

        <button className="text-sky-400 text-sm font-medium hover:underline">
          Learn More →
        </button>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-12 text-center">
      <button className="px-8 py-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-slate-900 font-semibold hover:scale-[1.02] transition">
        Explore All Opportunities
      </button>
    </div>

  </div>
</section>





{/* OUR MARKET YOUR CALL */}
<section className="w-full bg-[#0b1220] py-20 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        Our Market, <span className="text-blue-500">Your Call</span>
      </h2>

      <p className="mt-5 text-gray-400 text-lg">
        Trade global markets with confidence. Stocks, Forex, Crypto and Futures —
        all powered by real-time data, advanced charts and smart tools.
      </p>

      {/* FEATURES */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <p className="text-gray-300">Institutional-grade trading tools</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <p className="text-gray-300">Live market data & deep insights</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          <p className="text-gray-300">Trade anytime, anywhere</p>
        </div>
      </div>

      {/* CTA BUTTONS */}
      <div className="mt-10 flex flex-wrap gap-4">
        <button className="px-7 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold">
          Start Trading
        </button>
        <button className="px-7 py-3 border border-gray-600 hover:border-blue-500 transition rounded-lg text-gray-300 hover:text-white">
          Learn More
        </button>
      </div>
    </div>

    {/* RIGHT VISUAL */}
    <div className="relative">
      <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/10 rounded-2xl p-8 border border-gray-800">
        <div className="grid grid-cols-2 gap-6 text-center">
          <div>
            <h4 className="text-3xl font-bold text-white">24/7</h4>
            <p className="text-gray-400 text-sm mt-1">Market Access</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-white">100+</h4>
            <p className="text-gray-400 text-sm mt-1">Trading Instruments</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-white">0%</h4>
            <p className="text-gray-400 text-sm mt-1">Brokerage*</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-white">Fast</h4>
            <p className="text-gray-400 text-sm mt-1">Execution</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>



{/* OWN YOUR TRADING EXPERIENCE */}
<section className="w-full bg-[#0b1220] py-20 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

    {/* LEFT – VISUAL / STATS */}
    <div className="relative">
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-8 shadow-xl">
        <div className="grid grid-cols-2 gap-6">
          
          <div className="bg-[#0b1220] rounded-xl p-5 border border-gray-800">
            <h4 className="text-3xl font-bold text-white">Ultra</h4>
            <p className="text-gray-400 text-sm mt-1">Fast Execution</p>
          </div>

          <div className="bg-[#0b1220] rounded-xl p-5 border border-gray-800">
            <h4 className="text-3xl font-bold text-white">Multi</h4>
            <p className="text-gray-400 text-sm mt-1">Asset Trading</p>
          </div>

          <div className="bg-[#0b1220] rounded-xl p-5 border border-gray-800">
            <h4 className="text-3xl font-bold text-white">Smart</h4>
            <p className="text-gray-400 text-sm mt-1">Risk Controls</p>
          </div>

          <div className="bg-[#0b1220] rounded-xl p-5 border border-gray-800">
            <h4 className="text-3xl font-bold text-white">24/7</h4>
            <p className="text-gray-400 text-sm mt-1">Market Access</p>
          </div>

        </div>
      </div>
    </div>

    {/* RIGHT – CONTENT */}
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        Own Your <span className="text-blue-500">Trading Experience</span>
      </h2>

      <p className="mt-6 text-gray-400 text-lg">
        Take full control of your trades with advanced tools, real-time data
        and a platform built for speed, precision and flexibility.
      </p>

      {/* FEATURES LIST */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <p className="text-gray-300">Fully customizable trading interface</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <p className="text-gray-300">Advanced charts & indicators</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          <p className="text-gray-300">Powerful risk & order management</p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap gap-4">
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold">
          Get Started
        </button>
        <button className="px-8 py-3 border border-gray-600 hover:border-blue-500 transition rounded-lg text-gray-300 hover:text-white">
          Explore Platform
        </button>
      </div>
    </div>

  </div>
</section>




{/* BUY MORE PAY LESS */}
<section className="w-full bg-[#0b1220] py-20 px-4">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Buy More, <span className="text-green-500">Pay Less</span>
      </h2>
      <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
        Trade smarter with volume-based pricing. The more you trade,
        the lower your costs — built to reward active traders.
      </p>
    </div>

    {/* PRICING CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-8 hover:-translate-y-2 transition">
        <h4 className="text-xl font-semibold text-white mb-2">Starter</h4>
        <p className="text-gray-400 text-sm mb-6">For new & casual traders</p>

        <div className="text-4xl font-bold text-white mb-4">
          ₹20 <span className="text-sm text-gray-400">/ trade</span>
        </div>

        <ul className="space-y-3 text-gray-300 text-sm">
          <li>✔ Equity & Forex access</li>
          <li>✔ Standard execution speed</li>
          <li>✔ Basic analytics</li>
        </ul>

        <button className="mt-8 w-full py-3 bg-gray-800 hover:bg-green-600 transition rounded-lg text-white font-medium">
          Start Trading
        </button>
      </div>

      {/* CARD 2 – HIGHLIGHT */}
      <div className="relative bg-[#0f172a] border border-green-600 rounded-2xl p-8 scale-105 shadow-xl">
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-xs px-4 py-1 rounded-full text-white">
          Most Popular
        </span>

        <h4 className="text-xl font-semibold text-white mb-2">Pro Trader</h4>
        <p className="text-gray-400 text-sm mb-6">For active market players</p>

        <div className="text-4xl font-bold text-white mb-4">
          ₹10 <span className="text-sm text-gray-400">/ trade</span>
        </div>

        <ul className="space-y-3 text-gray-300 text-sm">
          <li>✔ Ultra-fast execution</li>
          <li>✔ Advanced charts & tools</li>
          <li>✔ Priority order routing</li>
        </ul>

        <button className="mt-8 w-full py-3 bg-green-600 hover:bg-green-700 transition rounded-lg text-white font-semibold">
          Upgrade Now
        </button>
      </div>

      {/* CARD 3 */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-8 hover:-translate-y-2 transition">
        <h4 className="text-xl font-semibold text-white mb-2">Elite</h4>
        <p className="text-gray-400 text-sm mb-6">For high-volume traders</p>

        <div className="text-4xl font-bold text-white mb-4">
          ₹0 <span className="text-sm text-gray-400">Brokerage*</span>
        </div>

        <ul className="space-y-3 text-gray-300 text-sm">
          <li>✔ Zero brokerage on select trades</li>
          <li>✔ Dedicated account manager</li>
          <li>✔ Custom trading strategies</li>
        </ul>

        <button className="mt-8 w-full py-3 bg-gray-800 hover:bg-green-600 transition rounded-lg text-white font-medium">
          Contact Sales
        </button>
      </div>

    </div>

    {/* FOOT NOTE */}
    <p className="text-center text-xs text-gray-500 mt-10">
      *Brokerage benefits may vary based on product and market conditions.
    </p>

  </div>
</section>



{/* OPEN YOUR ACCOUNT IN 3 STEPS */}
<section className="w-full bg-[#0b1220] py-20 px-4">
  <div className="max-w-7xl mx-auto text-center">

    {/* HEADER */}
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
      Open Your Account in <span className="text-blue-500">3 Simple Steps</span>
    </h2>
    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
      Get started with TradeSmart quickly and securely. Follow these simple steps to start trading today.
    </p>

    {/* STEPS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

      {/* STEP 1 */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-8 hover:-translate-y-2 transition">
        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-600 text-white rounded-full font-bold text-xl mb-6">
          1
        </div>
        <h4 className="text-xl font-semibold text-white mb-3">Sign Up</h4>
        <p className="text-gray-400 text-sm">
          Fill in your details and create a secure TradeSmart account in minutes.
        </p>
      </div>

      {/* STEP 2 */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-8 hover:-translate-y-2 transition">
        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-600 text-white rounded-full font-bold text-xl mb-6">
          2
        </div>
        <h4 className="text-xl font-semibold text-white mb-3">Verify Identity</h4>
        <p className="text-gray-400 text-sm">
          Complete KYC verification securely with government ID and address proof.
        </p>
      </div>

      {/* STEP 3 */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-8 hover:-translate-y-2 transition">
        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-600 text-white rounded-full font-bold text-xl mb-6">
          3
        </div>
        <h4 className="text-xl font-semibold text-white mb-3">Start Trading</h4>
        <p className="text-gray-400 text-sm">
          Fund your account and start trading in Stocks, Forex, Crypto and Futures.
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-16">
      <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold text-lg">
        Open Your Account Now
      </button>
    </div>

  </div>
</section>



{/* LOVED BY USERS */}
<section className="w-full bg-[#0b1220] py-20 px-4">
  <div className="max-w-7xl mx-auto text-center">

    {/* HEADER */}
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
      Loved by <span className="text-pink-500">Traders Worldwide</span>
    </h2>
    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
      See why thousands of active traders trust TradeSmart for fast, reliable, and smart trading.
    </p>

    {/* TESTIMONIAL CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition">
        <p className="text-gray-300 italic mb-6">
          "TradeSmart has completely changed the way I trade. The charts are intuitive and execution is lightning fast!"
        </p>
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/50?img=1"
            alt="User 1"
            className="w-12 h-12 rounded-full border border-gray-700"
          />
          <div>
            <h4 className="text-white font-semibold">Rohit Sharma</h4>
            <p className="text-gray-400 text-sm">Professional Trader</p>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition">
        <p className="text-gray-300 italic mb-6">
          "I love the multi-asset access. Stocks, Forex, Crypto – all in one place. Execution speed is unmatched."
        </p>
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/50?img=2"
            alt="User 2"
            className="w-12 h-12 rounded-full border border-gray-700"
          />
          <div>
            <h4 className="text-white font-semibold">Anjali Mehta</h4>
            <p className="text-gray-400 text-sm">Active Trader</p>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition">
        <p className="text-gray-300 italic mb-6">
          "The analytics tools and advanced charts have helped me make informed decisions every day. Highly recommend!"
        </p>
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/50?img=3"
            alt="User 3"
            className="w-12 h-12 rounded-full border border-gray-700"
          />
          <div>
            <h4 className="text-white font-semibold">Manish Kumar</h4>
            <p className="text-gray-400 text-sm">Forex Trader</p>
          </div>
        </div>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-16">
      <button className="px-10 py-4 bg-pink-500 hover:bg-pink-600 transition rounded-lg text-white font-semibold text-lg">
        Join Our Community
      </button>
    </div>

  </div>
</section>





{/* MARKET SUMMARY */}
<section className="w-full bg-[#0b1220] py-20 px-4">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
        Market <span className="text-blue-500">Summary</span>
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Get a snapshot of the major indices, top gainers, losers, and key market trends.
      </p>
    </div>

    {/* SUMMARY CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

      {/* CARD 1: NIFTY */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 hover:-translate-y-1 transition">
        <h4 className="text-white font-semibold mb-2">NIFTY 50</h4>
        <p className="text-gray-400 text-sm mb-4">+125.35 (0.75%)</p>
        <div className="h-2 bg-blue-500 rounded-full w-3/4"></div>
      </div>

      {/* CARD 2: BANK NIFTY */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 hover:-translate-y-1 transition">
        <h4 className="text-white font-semibold mb-2">BANK NIFTY</h4>
        <p className="text-gray-400 text-sm mb-4">+312.80 (0.90%)</p>
        <div className="h-2 bg-green-500 rounded-full w-3/4"></div>
      </div>

      {/* CARD 3: CRYPTO */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 hover:-translate-y-1 transition">
        <h4 className="text-white font-semibold mb-2">Bitcoin (BTC)</h4>
        <p className="text-gray-400 text-sm mb-4">₹30,45,000 (+2.5%)</p>
        <div className="h-2 bg-yellow-500 rounded-full w-3/4"></div>
      </div>

      {/* CARD 4: USD/INR */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 hover:-translate-y-1 transition">
        <h4 className="text-white font-semibold mb-2">USD → INR</h4>
        <p className="text-gray-400 text-sm mb-4">₹82.15 (-0.1%)</p>
        <div className="h-2 bg-red-500 rounded-full w-3/4"></div>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-16 text-center">
      <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold text-lg">
        View Full Market Dashboard
      </button>
    </div>

  </div>
</section>



{/* TRADING PLATFORMS FAQS */}
<section className="w-full bg-[#0b1220] py-20 px-4">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
        Trading Platforms <span className="text-blue-500">FAQs</span>
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Find answers to the most common questions about our trading platforms and tools.
      </p>
    </div>

    {/* FAQ ITEMS */}
    <div className="space-y-4 max-w-4xl mx-auto">

      {/* FAQ 1 */}
      <details className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 cursor-pointer group">
        <summary className="text-white font-semibold text-lg list-none">
          Which markets can I trade on TradeSmart?
        </summary>
        <p className="mt-3 text-gray-400 text-sm leading-relaxed">
          You can trade in Stocks, Forex, Futures, Options, and Cryptocurrencies using our platform.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 cursor-pointer group">
        <summary className="text-white font-semibold text-lg list-none">
          Is there a mobile app for trading?
        </summary>
        <p className="mt-3 text-gray-400 text-sm leading-relaxed">
          Yes, TradeSmart offers a mobile app for iOS and Android with full functionality and real-time updates.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 cursor-pointer group">
        <summary className="text-white font-semibold text-lg list-none">
          How do I connect my brokerage account?
        </summary>
        <p className="mt-3 text-gray-400 text-sm leading-relaxed">
          Simply login, navigate to "Connect Account", and follow the secure authentication steps to link your brokerage account.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 cursor-pointer group">
        <summary className="text-white font-semibold text-lg list-none">
          Is my data secure on TradeSmart?
        </summary>
        <p className="mt-3 text-gray-400 text-sm leading-relaxed">
          Yes, we follow industry-standard encryption and security protocols to protect your data and trades.
        </p>
      </details>

    </div>

    {/* CTA */}
    <div className="mt-16 text-center">
      <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold text-lg">
        Visit Full FAQ Section
      </button>
    </div>

  </div>
</section>





{/* TRADING TOOLS – UNIQUE FEATURES */}
<section className="w-full bg-[#0b1220] py-20 px-4">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
        Trading Tools <span className="text-blue-500">You Won’t Find Anywhere Else</span>
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Explore our unique suite of tools designed for smart, informed, and faster trading.
      </p>
    </div>

    {/* FEATURE CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* CARD 1 */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition">
        <h4 className="text-white font-semibold mb-2">Live Market Scanner</h4>
        <p className="text-gray-400 text-sm">
          Scan thousands of stocks, indices, and currencies in real-time to spot trends and opportunities instantly.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition">
        <h4 className="text-white font-semibold mb-2">Advanced Charting Tools</h4>
        <p className="text-gray-400 text-sm">
          Multi-timeframe, customizable charts with technical indicators, overlays, and drawing tools for precise analysis.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition">
        <h4 className="text-white font-semibold mb-2">Smart Alerts & Notifications</h4>
        <p className="text-gray-400 text-sm">
          Get instant alerts for price movements, volume spikes, news, and technical patterns across your watchlist.
        </p>
      </div>

      {/* CARD 4 */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition">
        <h4 className="text-white font-semibold mb-2">AI-Powered Insights</h4>
        <p className="text-gray-400 text-sm">
          Receive data-driven trade suggestions, market sentiment analysis, and predictive indicators for smarter decisions.
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-16 text-center">
      <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold text-lg">
        Explore All Tools
      </button>
    </div>

  </div>
</section>












      

      {/* Add other sections like Advanced Charts, BioCharts, FX Experts, etc. */}
      {/* You can copy the sections we previously made and paste them here for the complete token page */}

    </div>
  );
};

export default TokenInfo;
