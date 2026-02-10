import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===================== REVEAL (NO LIB) ===================== */
const Reveal = ({ refs, idx, children, className = "" }) => {
  return (
    <div
      ref={(el) => {
        if (el) refs.current[idx] = el;
      }}
      className={`reveal opacity-0 translate-y-4 ${className}`}
      data-reveal="1"
    >
      {children}
    </div>
  );
};

const RMS = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  // Reveal refs store
  const revealRefs = useRef([]);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(t);
  }, []);

  // Intersection Observer for Reveal
  useEffect(() => {
    if (!mounted) return;

    const nodes = revealRefs.current.filter(Boolean);
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [mounted]);

  const summary = useMemo(
    () => [
      { label: "Net Balance", value: "₹ 9,99,99,999", tone: "text-emerald-300" },
      { label: "Available Cash", value: "₹ 5,00,00,000", tone: "text-sky-300" },
      { label: "Collateral", value: "₹ 0", tone: "text-slate-200" },
    ],
    []
  );

  const details = useMemo(
    () => [
      { label: "Available Intraday Pay-in", value: "₹ 0" },
      { label: "Available Limit Margin", value: "₹ 0" },
      { label: "M2M Unrealized", value: "₹ 0" },
      { label: "M2M Realized", value: "₹ 0" },
      { label: "Utilised Debits", value: "₹ 0" },
      { label: "Utilised Span", value: "₹ 0" },
      { label: "Utilised Option Premium", value: "₹ 0" },
      { label: "Utilised Holding Sales", value: "₹ 0" },
      { label: "Utilised Exposure", value: "₹ 0" },
      { label: "Utilised Turnover", value: "₹ 0" },
      { label: "Utilised Payout", value: "₹ 0" },
    ],
    []
  );

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  /* ===================== STYLES (FIXED) ===================== */
  const card =
    "rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-950/55 to-slate-900/25 shadow-xl";
  const hoverCard =
    "transition duration-300 hover:border-sky-400/25 hover:-translate-y-[3px] hover:shadow-[0_22px_70px_-35px_rgba(56,189,248,0.25)]";
  const softRow =
    "rounded-xl border border-slate-800/70 bg-slate-950/35 hover:bg-slate-900/35 transition";

  const btnPrimary =
    "px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-sky-400 to-blue-500 text-slate-950 hover:brightness-110 hover:-translate-y-[1px] active:scale-[0.98] transition";
  const btnGhost =
    "px-8 py-3 rounded-xl font-semibold border border-slate-700 bg-slate-950/30 text-slate-100 hover:bg-slate-950/55 hover:border-sky-400/25 hover:-translate-y-[1px] active:scale-[0.98] transition";

  // reveal index counter
  let r = 0;

  return (
    <div className="min-h-screen relative bg-[#070b14] text-slate-100 overflow-hidden">
      {/* ========= LOCAL CSS (Reveal + BG animation) ========= */}
      <style>{`
        @keyframes floaty { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .reveal{ transition: opacity .75s cubic-bezier(.2,.8,.2,1), transform .75s cubic-bezier(.2,.8,.2,1); }
        .reveal-in{ opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>

      {/* ========= BACKGROUND EFFECT ========= */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/15 via-indigo-500/10 to-[#070b14]" />

        <div
          className="absolute -top-44 -left-44 h-[560px] w-[560px] rounded-full bg-sky-500/35 blur-3xl opacity-90"
          style={{ animation: "floaty 7s ease-in-out infinite" }}
        />
        <div
          className="absolute top-10 -right-56 h-[700px] w-[700px] rounded-full bg-indigo-500/30 blur-3xl opacity-80"
          style={{ animation: "floaty 8.5s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-60 left-1/3 h-[620px] w-[620px] rounded-full bg-emerald-500/22 blur-3xl opacity-80"
          style={{ animation: "floaty 9.5s ease-in-out infinite" }}
        />

        <div
          className="absolute inset-0 opacity-[0.08]
            bg-[linear-gradient(to_right,rgba(255,255,255,0.28)_1px,transparent_1px),
                linear-gradient(to_bottom,rgba(255,255,255,0.28)_1px,transparent_1px)]
            bg-[size:48px_48px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)]" />
      </div>

      {/* ========= CONTENT ========= */}
      <div className="px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl">
          {/* HEADER */}
          <Reveal refs={revealRefs} idx={r++}>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/40 px-4 py-2 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                RMS • Funds & Margins
              </div>

              <h1 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">
                Funds & Margins (RMS)
              </h1>

              <p className="mt-2 text-sm sm:text-base text-slate-400">
                Clear snapshot of funds, margin utilisation and available limits.
              </p>
            </div>
          </Reveal>

          {/* SUMMARY CARDS */}
          <Reveal refs={revealRefs} idx={r++}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {summary.map((item, i) => (
                <div
                  key={i}
                  className={`${card} ${hoverCard} p-5 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 bg-gradient-to-r from-sky-500/10 via-transparent to-indigo-500/10" />
                  <div className="relative">
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      {item.label}
                    </p>
                    <p className={`mt-2 text-xl font-bold ${item.tone}`}>
                      {item.value}
                    </p>
                    <div className="mt-4 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
                    <p className="mt-3 text-xs text-slate-400">
                      Demo values • connect API for live funds
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* DETAILS TABLE */}
          <Reveal refs={revealRefs} idx={r++}>
            <div className={`mt-6 ${card} overflow-hidden`}>
              <div className="relative px-6 py-5 border-b border-slate-800/70 bg-slate-950/45 overflow-hidden">
                <div className="absolute inset-0 opacity-60 bg-gradient-to-r from-emerald-500/10 via-transparent to-sky-500/10" />
                <div className="relative flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-semibold text-slate-100">
                      RMS Details
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Margin utilisation breakdown (demo)
                    </p>
                  </div>

                  <span className="text-[11px] px-2 py-1 rounded-full bg-sky-500/10 text-sky-200 border border-sky-500/20">
                    Updated: Today (Demo)
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <tbody>
                    {details.map((row, i) => (
                      <tr
                        key={i}
                        className="group border-t border-slate-800/60 hover:bg-slate-950/40 transition"
                      >
                        <td className="px-6 py-4 text-sm text-slate-300">
                          <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-slate-700 group-hover:bg-sky-400 transition" />
                            <span className="text-slate-300 group-hover:text-slate-100 transition">
                              {row.label}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-right font-semibold text-slate-100">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-6 py-4 border-t border-slate-800/70 bg-slate-950/35">
                <p className="text-xs text-slate-400">
                  Tip: Live RMS values broker API se aayenge (Zerodha/Angel etc).
                </p>
              </div>
            </div>
          </Reveal>

          {/* ACTIONS */}
          <Reveal refs={revealRefs} idx={r++}>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onClick={() => navigate("/profile")} className={btnGhost}>
                Back to Profile
              </button>

              <button
                onClick={handleLogout}
                className="px-8 py-3 rounded-xl font-semibold bg-rose-500/15 border border-rose-500/25 text-rose-200 hover:bg-rose-500/20 hover:border-rose-400/40 hover:-translate-y-[1px] active:scale-[0.98] transition"
              >
                Logout
              </button>
            </div>
          </Reveal>

          {/* ======================= FX BLUE ======================= */}
          <Reveal refs={revealRefs} idx={r++}>
            <section className="w-full py-14">
              <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                  FX Blue Expert Advisors
                </h2>
                <p className="text-slate-400 max-w-3xl mx-auto mb-12">
                  Professional automated trading systems powered by FX Blue.
                  Monitor strategies, analyze performance, and manage risk.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Automated Strategies",
                      text: "Execute trades automatically based on predefined rules, indicators, and live market conditions.",
                    },
                    {
                      title: "Advanced Analytics",
                      text: "Track drawdowns, win ratio, profit factor, equity curve, and historical performance.",
                    },
                    {
                      title: "Risk Management",
                      text: "Control exposure with intelligent stop-loss, lot sizing, and capital protection mechanisms.",
                    },
                  ].map((x, i) => (
                    <div key={i} className={`${card} ${hoverCard} p-6`}>
                      <h3 className="text-lg font-semibold text-slate-100 mb-2">
                        {x.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {x.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <button onClick={() => navigate("/tokens")} className={btnPrimary}>
                    Explore FX Blue Tools
                  </button>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ======================= ECONOMIC CALENDAR ======================= */}
          <Reveal refs={revealRefs} idx={r++}>
            <section className="w-full px-4 sm:px-6 py-12">
              <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Economic Calendar
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">
                    Track upcoming economic events that can impact global markets
                  </p>
                </div>

                <div className={`overflow-x-auto rounded-2xl border border-slate-800 ${hoverCard}`}>
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
                      {[
                        {
                          time: "10:30",
                          c: "India 🇮🇳",
                          e: "CPI Inflation (YoY)",
                          imp: "High",
                          impC: "bg-red-500/10 text-red-400",
                          f: "5.2%",
                          p: "5.1%",
                        },
                        {
                          time: "14:00",
                          c: "USA 🇺🇸",
                          e: "FOMC Meeting Minutes",
                          imp: "Medium",
                          impC: "bg-yellow-500/10 text-yellow-400",
                          f: "—",
                          p: "—",
                        },
                        {
                          time: "18:30",
                          c: "UK 🇬🇧",
                          e: "GDP Growth Rate",
                          imp: "Low",
                          impC: "bg-green-500/10 text-green-400",
                          f: "0.3%",
                          p: "0.2%",
                        },
                      ].map((x, i) => (
                        <tr
                          key={i}
                          className="border-t border-slate-800 hover:bg-slate-900/50 transition"
                        >
                          <td className="px-4 py-3 text-slate-400">{x.time}</td>
                          <td className="px-4 py-3">{x.c}</td>
                          <td className="px-4 py-3">{x.e}</td>
                          <td className="px-4 py-3 text-center">
                            <span className={`px-2 py-1 text-xs rounded-full ${x.impC}`}>
                              {x.imp}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center">—</td>
                          <td className="px-4 py-3 text-center">{x.f}</td>
                          <td className="px-4 py-3 text-center">{x.p}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ======================= FUTURES MARKET ======================= */}
          <Reveal refs={revealRefs} idx={r++}>
            <section className="w-full px-4 sm:px-6 py-12">
              <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Futures Market Overview
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">
                    Live price action and trends across energy and metal futures
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className={`${card} ${hoverCard} p-6`}>
                    <h3 className="text-lg font-semibold text-slate-100 mb-4">
                      Energy Futures
                    </h3>
                    <div className="space-y-3">
                      {[
                        { name: "Crude Oil", sub: "WTI · USD", price: "78.42", chg: "+0.85%", pos: true },
                        { name: "Brent Oil", sub: "ICE · USD", price: "82.10", chg: "-0.42%", pos: false },
                        { name: "Natural Gas", sub: "NYMEX · USD", price: "2.48", chg: "+1.32%", pos: true },
                      ].map((x, i) => (
                        <div key={i} className={`flex items-center justify-between p-3 ${softRow}`}>
                          <div>
                            <p className="text-sm font-medium text-slate-200">{x.name}</p>
                            <span className="text-xs text-slate-400">{x.sub}</span>
                          </div>
                          <div className="text-right">
                            <p className={`text-sm font-semibold ${x.pos ? "text-green-400" : "text-red-400"}`}>
                              {x.price}
                            </p>
                            <span className={`text-xs ${x.pos ? "text-green-400" : "text-red-400"}`}>
                              {x.chg}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`${card} ${hoverCard} p-6`}>
                    <h3 className="text-lg font-semibold text-slate-100 mb-4">
                      Metal Futures
                    </h3>
                    <div className="space-y-3">
                      {[
                        { name: "Gold", sub: "COMEX · USD", price: "2038.6", chg: "+0.21%", pos: true },
                        { name: "Silver", sub: "COMEX · USD", price: "24.68", chg: "-0.56%", pos: false },
                        { name: "Copper", sub: "LME · USD", price: "4.12", chg: "+0.74%", pos: true },
                      ].map((x, i) => (
                        <div key={i} className={`flex items-center justify-between p-3 ${softRow}`}>
                          <div>
                            <p className="text-sm font-medium text-slate-200">{x.name}</p>
                            <span className="text-xs text-slate-400">{x.sub}</span>
                          </div>
                          <div className="text-right">
                            <p className={`text-sm font-semibold ${x.pos ? "text-green-400" : "text-red-400"}`}>
                              {x.price}
                            </p>
                            <span className={`text-xs ${x.pos ? "text-green-400" : "text-red-400"}`}>
                              {x.chg}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ======================= FOREX PERFORMANCE ======================= */}
          <Reveal refs={revealRefs} idx={r++}>
            <section className="w-full px-4 sm:px-6 py-12">
              <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Forex Performance
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">
                    Performance overview of major currency pairs in global forex markets
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { pair: "EUR / USD", val: "1.0842", chg: "+0.36%", pos: true, desc: "Euro gaining strength against US Dollar amid easing inflation outlook." },
                    { pair: "GBP / USD", val: "1.2715", chg: "-0.18%", pos: false, desc: "Pound under pressure ahead of key UK economic data releases." },
                    { pair: "USD / INR", val: "83.12", chg: "+0.09%", pos: true, desc: "Dollar strengthens slightly against Rupee on global risk-off sentiment." },
                    { pair: "USD / JPY", val: "148.76", chg: "-0.42%", pos: false, desc: "Yen rebounds as traders assess Bank of Japan policy stance." },
                    { pair: "AUD / USD", val: "0.6584", chg: "+0.51%", pos: true, desc: "Australian Dollar supported by rising commodity prices." },
                    { pair: "EUR / GBP", val: "0.8531", chg: "-0.27%", pos: false, desc: "Euro weakens slightly against Pound in short-term consolidation." },
                  ].map((x, i) => (
                    <div key={i} className={`${card} ${hoverCard} p-5`}>
                      <h4 className="text-sm font-semibold text-slate-200 mb-1">
                        {x.pair}
                      </h4>
                      <div className="flex items-end justify-between mb-2">
                        <span className={`text-2xl font-bold ${x.pos ? "text-green-400" : "text-red-400"}`}>
                          {x.val}
                        </span>
                        <span className={`text-sm ${x.pos ? "text-green-400" : "text-red-400"}`}>
                          {x.chg}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">{x.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          {/* ======================= FULLY EQUIPPED ======================= */}
          <Reveal refs={revealRefs} idx={r++}>
            <section className="w-full px-4 sm:px-6 py-16">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                      Fully Equipped Trading Platform
                    </h2>
                    <p className="text-slate-400 max-w-xl mb-6">
                      Trade confidently with a complete suite of professional tools designed for modern traders.
                    </p>

                    <div className="space-y-4">
                      {[
                        "Real-time market prices across Forex, Crypto, Commodities & Indices",
                        "Advanced charts with indicators, drawing tools and multiple timeframes",
                        "Risk management tools including stop-loss, take-profit and alerts",
                        "Economic calendar, market news and performance insights in one place",
                      ].map((t, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-green-400" />
                          <p className="text-slate-300 text-sm">{t}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex gap-4 flex-wrap">
                      <button className={btnPrimary}>Start Trading</button>
                      <button className={btnGhost}>Explore Features</button>
                    </div>
                  </div>

                  <div className="relative">
                    <div className={`${card} ${hoverCard} p-6 shadow-lg`}>
                      <h4 className="text-slate-200 text-sm font-semibold mb-4">
                        Live Market Overview
                      </h4>
                      <div className="space-y-3">
                        {[
                          { a: "EUR / USD", b: "1.0842", c: "text-green-400" },
                          { a: "BTC / USD", b: "42,180", c: "text-red-400" },
                          { a: "Gold", b: "2038.6", c: "text-green-400" },
                          { a: "Crude Oil", b: "78.42", c: "text-green-400" },
                        ].map((x, i) => (
                          <div key={i} className="flex justify-between text-sm">
                            <span className="text-slate-400">{x.a}</span>
                            <span className={x.c}>{x.b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -inset-1 bg-green-500/10 blur-2xl rounded-2xl -z-10" />
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ======================= INDIAN STOCKS + TRENDS ======================= */}
          <Reveal refs={revealRefs} idx={r++}>
            <section className="w-full px-4 sm:px-6 py-14">
              <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Indian Stocks & Community Trends
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">
                    Track market movers and see what traders across the community are watching
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-7 space-y-4">
                    {[
                      { name: "Reliance Industries", price: "2,845.40", chg: "+1.24%" },
                      { name: "TCS", price: "3,982.10", chg: "-0.48%" },
                      { name: "HDFC Bank", price: "1,586.75", chg: "+0.92%" },
                      { name: "Infosys", price: "1,672.30", chg: "+1.68%" },
                    ].map((stock, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between rounded-xl border border-slate-800 ${hoverCard} bg-gradient-to-b from-slate-900 to-slate-950 px-4 py-3`}
                      >
                        <div>
                          <h6 className="text-slate-200 font-medium text-sm">{stock.name}</h6>
                          <p className="text-xs text-slate-400">NSE • Equity</p>
                        </div>
                        <div className="text-right">
                          <p className="text-slate-200 font-semibold text-sm">₹ {stock.price}</p>
                          <p className={`text-xs ${stock.chg.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                            {stock.chg}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    {[
                      { title: "#BANKNIFTY Breakout", desc: "High call buying seen near resistance levels." },
                      { title: "#Reliance Results", desc: "Community expects strong earnings momentum." },
                      { title: "#IT Stocks Rally", desc: "Infosys and TCS showing renewed buying interest." },
                      { title: "#Midcap Volatility", desc: "Traders cautious amid high intraday swings." },
                    ].map((trend, i) => (
                      <div key={i} className={`${card} ${hoverCard} p-4`}>
                        <h6 className="text-slate-200 text-sm font-semibold mb-1">{trend.title}</h6>
                        <p className="text-xs text-slate-400 leading-relaxed">{trend.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ======================= INTERESTED? ======================= */}
          <Reveal refs={revealRefs} idx={r++}>
            <section className="w-full px-4 sm:px-6 py-16">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    Interested? Learn More
                  </h2>
                  <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
                    Explore different trading opportunities and choose what fits your investment style and financial goals.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Trading", desc: "Trade stocks, indices and commodities with real-time data and powerful analytical tools." },
                    { title: "Forex Trading", desc: "Access global currency markets with advanced charts, indicators and professional execution." },
                    { title: "Funds", desc: "Invest in diversified funds and manage risk with long-term growth strategies." },
                  ].map((x, i) => (
                    <div key={i} className={`${card} ${hoverCard} p-6`}>
                      <h4 className="text-lg font-semibold text-white mb-2">{x.title}</h4>
                      <p className="text-sm text-slate-400 mb-5">{x.desc}</p>
                      <button className="text-sky-400 text-sm font-medium hover:underline hover:translate-x-1 transition">
                        Learn More →
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <button className={btnPrimary}>Explore All Opportunities</button>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ======================= OUR MARKET, YOUR CALL ======================= */}
          <Reveal refs={revealRefs} idx={r++}>
            <section className="w-full py-20 px-4">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Our Market, <span className="text-blue-500">Your Call</span>
                  </h2>
                  <p className="mt-5 text-gray-400 text-lg">
                    Trade global markets with confidence. Stocks, Forex, Crypto and Futures — powered by real-time data and smart tools.
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      { dot: "bg-blue-500", t: "Institutional-grade trading tools" },
                      { dot: "bg-green-500", t: "Live market data & deep insights" },
                      { dot: "bg-purple-500", t: "Trade anytime, anywhere" },
                    ].map((x, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full ${x.dot}`} />
                        <p className="text-gray-300">{x.t}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <button className={btnPrimary}>Start Trading</button>
                    <button className={btnGhost}>Learn More</button>
                  </div>
                </div>

                <div className="relative">
                  <div className={`${card} ${hoverCard} p-8`}>
                    <div className="grid grid-cols-2 gap-6 text-center">
                      {[
                        { a: "24/7", b: "Market Access" },
                        { a: "100+", b: "Trading Instruments" },
                        { a: "0%", b: "Brokerage*" },
                        { a: "Fast", b: "Execution" },
                      ].map((x, i) => (
                        <div key={i}>
                          <h4 className="text-3xl font-bold text-white">{x.a}</h4>
                          <p className="text-gray-400 text-sm mt-1">{x.b}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -inset-6 bg-blue-500/10 blur-2xl rounded-3xl -z-10" />
                </div>
              </div>
            </section>
          </Reveal>

          {/* ======================= OWN EXPERIENCE ======================= */}
          <Reveal refs={revealRefs} idx={r++}>
            <section className="w-full py-20 px-4">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                <div className="relative">
                  <div className={`${card} ${hoverCard} p-8 shadow-xl`}>
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { a: "Ultra", b: "Fast Execution" },
                        { a: "Multi", b: "Asset Trading" },
                        { a: "Smart", b: "Risk Controls" },
                        { a: "24/7", b: "Market Access" },
                      ].map((x, i) => (
                        <div
                          key={i}
                          className="bg-[#0b1220] rounded-xl p-5 border border-gray-800 hover:border-sky-400/25 transition"
                        >
                          <h4 className="text-3xl font-bold text-white">{x.a}</h4>
                          <p className="text-gray-400 text-sm mt-1">{x.b}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -inset-8 bg-violet-500/10 blur-3xl -z-10 rounded-3xl" />
                </div>

                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Own Your <span className="text-blue-500">Trading Experience</span>
                  </h2>

                  <p className="mt-6 text-gray-400 text-lg">
                    Take full control of your trades with advanced tools, real-time data and a platform built for speed and precision.
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      { dot: "bg-blue-500", t: "Fully customizable trading interface" },
                      { dot: "bg-green-500", t: "Advanced charts & indicators" },
                      { dot: "bg-purple-500", t: "Powerful risk & order management" },
                    ].map((x, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full ${x.dot}`} />
                        <p className="text-gray-300">{x.t}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <button className={btnPrimary}>Get Started</button>
                    <button className={btnGhost}>Explore Platform</button>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ======================= PRICING ======================= */}
          <Reveal refs={revealRefs} idx={r++}>
            <section className="w-full py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Buy More, <span className="text-green-500">Pay Less</span>
                  </h2>
                  <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
                    Trade smarter with volume-based pricing. The more you trade, the lower your costs.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className={`${card} ${hoverCard} p-8`}>
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
                    <button className="mt-8 w-full py-3 rounded-lg bg-slate-800 hover:bg-green-600 transition text-white font-medium">
                      Start Trading
                    </button>
                  </div>

                  <div className={`relative ${card} ${hoverCard} p-8 border border-green-600`}>
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
                    <button className="mt-8 w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 transition text-white font-semibold">
                      Upgrade Now
                    </button>
                  </div>

                  <div className={`${card} ${hoverCard} p-8`}>
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
                    <button className="mt-8 w-full py-3 rounded-lg bg-slate-800 hover:bg-green-600 transition text-white font-medium">
                      Contact Sales
                    </button>
                  </div>
                </div>

                <p className="text-center text-xs text-gray-500 mt-10">
                  *Brokerage benefits may vary based on product and market conditions.
                </p>
              </div>
            </section>
          </Reveal>

          {/* ======================= 3 STEPS ======================= */}
          <Reveal refs={revealRefs} idx={r++}>
            <section className="w-full py-20 px-4">
              <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Open Your Account in <span className="text-blue-500">3 Simple Steps</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
                  Get started with TradeSmart quickly and securely.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                  {[
                    { n: "1", bg: "bg-blue-600", title: "Sign Up", desc: "Create a secure TradeSmart account in minutes." },
                    { n: "2", bg: "bg-green-600", title: "Verify Identity", desc: "Complete KYC verification securely." },
                    { n: "3", bg: "bg-purple-600", title: "Start Trading", desc: "Fund your account and start trading." },
                  ].map((x, i) => (
                    <div key={i} className={`${card} ${hoverCard} p-8`}>
                      <div className={`w-16 h-16 mx-auto flex items-center justify-center ${x.bg} text-white rounded-full font-bold text-xl mb-6`}>
                        {x.n}
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3">{x.title}</h4>
                      <p className="text-gray-400 text-sm">{x.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-16">
                  <button className={btnPrimary}>Open Your Account Now</button>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ======================= TESTIMONIALS ======================= */}
          <Reveal refs={revealRefs} idx={r++}>
            <section className="w-full py-20 px-4">
              <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Loved by <span className="text-pink-500">Traders Worldwide</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
                  See why thousands of active traders trust TradeSmart.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      quote: '"TradeSmart has changed the way I trade. Execution is lightning fast!"',
                      name: "Rohit Sharma",
                      role: "Professional Trader",
                      img: "https://i.pravatar.cc/60?img=1",
                    },
                    {
                      quote: '"Multi-asset access in one place. Execution speed is unmatched."',
                      name: "Anjali Mehta",
                      role: "Active Trader",
                      img: "https://i.pravatar.cc/60?img=2",
                    },
                    {
                      quote: '"Advanced charts helped me make informed decisions daily."',
                      name: "Manish Kumar",
                      role: "Forex Trader",
                      img: "https://i.pravatar.cc/60?img=3",
                    },
                  ].map((x, i) => (
                    <div key={i} className={`${card} ${hoverCard} p-8 shadow-lg`}>
                      <p className="text-gray-300 italic mb-6">{x.quote}</p>
                      <div className="flex items-center gap-4">
                        <img src={x.img} alt={x.name} className="w-12 h-12 rounded-full border border-gray-700" />
                        <div className="text-left">
                          <h4 className="text-white font-semibold">{x.name}</h4>
                          <p className="text-gray-400 text-sm">{x.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16">
                  <button className="px-10 py-4 rounded-xl bg-pink-500 hover:bg-pink-600 transition text-white font-semibold text-lg">
                    Join Our Community
                  </button>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ======================= FAQs ======================= */}
          <Reveal refs={revealRefs} idx={r++}>
            <section className="w-full py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    Trading Platforms <span className="text-blue-500">FAQs</span>
                  </h2>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Find answers to the most common questions about our trading platform.
                  </p>
                </div>

                <div className="space-y-4 max-w-4xl mx-auto">
                  {[
                    { q: "Which markets can I trade on TradeSmart?", a: "You can trade Stocks, Forex, Futures, Options, and Cryptocurrencies using our platform." },
                    { q: "Is there a mobile app for trading?", a: "Yes, TradeSmart offers a mobile app for iOS and Android with full functionality and real-time updates." },
                    { q: "How do I connect my brokerage account?", a: "Login and follow the secure authentication steps to link your brokerage account." },
                    { q: "Is my data secure on TradeSmart?", a: "Yes, we follow industry-standard encryption and security protocols to protect your data." },
                  ].map((x, i) => (
                    <details key={i} className={`${card} ${hoverCard} p-6 cursor-pointer group overflow-hidden`}>
                      <summary className="text-white font-semibold text-lg list-none flex items-center justify-between">
                        <span>{x.q}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition">▾</span>
                      </summary>
                      <p className="mt-3 text-gray-400 text-sm leading-relaxed">{x.a}</p>
                    </details>
                  ))}
                </div>

                <div className="mt-16 text-center">
                  <button className={btnPrimary}>Visit Full FAQ Section</button>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ======================= UNIQUE TOOLS ======================= */}
          <Reveal refs={revealRefs} idx={r++}>
            <section className="w-full py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    Trading Tools{" "}
                    <span className="text-blue-500">You Won’t Find Anywhere Else</span>
                  </h2>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Explore a unique suite of tools designed for smart, informed, and faster trading.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { t: "Live Market Scanner", d: "Scan thousands of assets in real-time to spot trends and opportunities instantly." },
                    { t: "Advanced Charting Tools", d: "Multi-timeframe charts with technical indicators and drawing tools." },
                    { t: "Smart Alerts & Notifications", d: "Instant alerts for price moves, volume spikes, news and patterns." },
                    { t: "AI-Powered Insights", d: "Data-driven insights & predictive signals for smarter decisions." },
                  ].map((x, i) => (
                    <div key={i} className={`${card} ${hoverCard} p-6 shadow-lg`}>
                      <h4 className="text-white font-semibold mb-2">{x.t}</h4>
                      <p className="text-gray-400 text-sm">{x.d}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-16 text-center">
                  <button className={btnPrimary}>Explore All Tools</button>
                </div>
              </div>
            </section>
          </Reveal>

          <p className="mt-10 text-center text-xs text-slate-500">
            TradeSmart UI • RMS Module (Demo)
          </p>
        </div>
      </div>
    </div>
  );
};

export default RMS;
