import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // Page enter
  const [ready, setReady] = useState(false);

  // Reveal on scroll
  const [visible, setVisible] = useState({});
  const sectionsRef = useRef({});

  const setSectionRef = (key) => (el) => {
    if (el) sectionsRef.current[key] = el;
  };

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 20);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const key = e.target.getAttribute("data-key");
            setVisible((p) => (p[key] ? p : { ...p, [key]: true }));
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" }
    );

    Object.entries(sectionsRef.current).forEach(([key, el]) => {
      if (el) {
        el.setAttribute("data-key", key);
        io.observe(el);
      }
    });

    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, []);

  const basicInfo = useMemo(
    () => [
      { label: "Client Code", value: "ABC123" },
      { label: "Name", value: "Demo User" },
      { label: "Email", value: "demo@email.com" },
      { label: "Mobile No", value: "9876543210" },
      { label: "Broker ID", value: "B2C" },
      { label: "Last Login", value: "04 Feb 2026, 10:30 AM" },
    ],
    []
  );

  const exchanges = useMemo(() => ["NSE", "BSE", "MCX", "CDS", "NCDEX", "NFO"], []);
  const products = useMemo(() => ["DELIVERY", "INTRADAY", "MARGIN"], []);

  // ✅ Market widgets
  const marketSummary = useMemo(
    () => [
      { title: "NIFTY 50", value: "22,450.35", sub: "▲ +124.30 (0.56%)", pos: true },
      { title: "BANK NIFTY", value: "48,120.10", sub: "▼ −210.45 (0.43%)", pos: false },
      { title: "SENSEX", value: "74,985.20", sub: "▲ +356.90 (0.48%)", pos: true },
      { title: "INDIA VIX", value: "13.42", sub: "Low volatility zone", info: true },
    ],
    []
  );

  const watchlist = useMemo(
    () => [
      { sym: "RELIANCE", price: "2,945.30", chg: "+2.14%", vol: "8.2M" },
      { sym: "HDFCBANK", price: "1,642.10", chg: "-1.02%", vol: "6.9M" },
      { sym: "ICICIBANK", price: "1,095.85", chg: "+0.88%", vol: "6.1M" },
      { sym: "INFY", price: "1,598.20", chg: "-0.45%", vol: "5.7M" },
    ],
    []
  );

  const communityTrends = useMemo(
    () => [
      { title: "#BANKNIFTY Breakout", desc: "High call buying near resistance levels." },
      { title: "#Reliance Results", desc: "Community expects strong earnings momentum." },
      { title: "#IT Stocks Rally", desc: "Infosys & TCS showing renewed buying interest." },
      { title: "#Midcap Volatility", desc: "Traders cautious amid intraday swings." },
    ],
    []
  );

  const name = basicInfo.find((i) => i.label === "Name")?.value || "User";
  const code = basicInfo.find((i) => i.label === "Client Code")?.value || "—";
  const email = basicInfo.find((i) => i.label === "Email")?.value || "—";
  const lastLogin = basicInfo.find((i) => i.label === "Last Login")?.value || "—";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // ✅ WORKING reveal (no dynamic tailwind delay class)
  const reveal = (key, delay = 0) => {
    const show = !!visible[key];
    return {
      className:
        "will-change-transform transition-all duration-700 ease-out " +
        (show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"),
      style: { transitionDelay: `${delay}ms` },
    };
  };

  const cardBase =
    "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl " +
    "shadow-[0_30px_90px_-70px_rgba(56,189,248,0.65)] overflow-hidden";
  const hoverLift = "transition hover:-translate-y-1 hover:border-sky-400/25";

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 relative overflow-hidden">
      {/* ===================== LOCAL CSS (premium extras) ===================== */}
      <style>{`
        @keyframes floaty { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes shimmerMove { 0%{transform:translateX(-140%) rotate(10deg)} 100%{transform:translateX(140%) rotate(10deg)} }

        .shimmerLine{
          position:absolute; left:-40%; top:-40%;
          width:50%; height:180%;
          background: rgba(255,255,255,.14);
          filter: blur(18px);
          transform: translateX(-140%) rotate(10deg);
          opacity: 0;
        }
        .shimmerWrap:hover .shimmerLine{
          opacity: 1;
          animation: shimmerMove .9s ease forwards;
        }
      `}</style>

      {/* ===================== BACKDROP ===================== */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/12 via-indigo-500/8 to-transparent" />

        <div
          className="absolute -top-44 -left-44 h-[560px] w-[560px] rounded-full bg-sky-500/18 blur-3xl opacity-90"
          style={{ animation: "floaty 7s ease-in-out infinite" }}
        />
        <div
          className="absolute top-14 -right-56 h-[700px] w-[700px] rounded-full bg-indigo-500/16 blur-3xl opacity-85"
          style={{ animation: "floaty 8.5s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-60 left-1/3 h-[620px] w-[620px] rounded-full bg-emerald-500/12 blur-3xl opacity-80"
          style={{ animation: "floaty 9.5s ease-in-out infinite" }}
        />

        <div
          className="absolute inset-0 opacity-[0.08]
          bg-[linear-gradient(to_right,rgba(255,255,255,0.28)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(255,255,255,0.28)_1px,transparent_1px)]
          bg-[size:48px_48px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.78)_100%)]" />
      </div>

      {/* ===================== CONTENT ===================== */}
      <div
        className={[
          "relative px-4",
          "transition-all duration-700 ease-out",
          ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        ].join(" ")}
      >
        <div className="mx-auto max-w-6xl py-14 sm:py-16">
          {/* HEADER */}
          <div ref={setSectionRef("top")} {...reveal("top", 0)}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs tracking-[0.24em] text-slate-400 uppercase">
                  tradesmart • account
                </p>
                <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
                  Profile Dashboard
                </h1>
                <p className="mt-2 text-sm text-slate-400 max-w-2xl">
                  Premium cards, market widgets, watchlist & scroll reveal (Tailwind only).
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => navigate("/rms")}
                  className="relative overflow-hidden rounded-xl px-4 py-2.5 font-semibold text-sm
                             bg-gradient-to-r from-sky-400 to-indigo-400 text-slate-950
                             shadow-[0_18px_70px_-45px_rgba(56,189,248,0.85)]
                             transition hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.98]"
                >
                  <span className="relative z-10">View Funds (RMS)</span>
                  <span className="absolute -inset-x-24 -top-10 h-20 rotate-12 bg-white/20 blur-xl translate-x-[-40%] hover:translate-x-[140%] transition-transform duration-700" />
                </button>

                <button
                  onClick={handleLogout}
                  className="rounded-xl px-4 py-2.5 font-semibold text-sm
                             bg-white/5 border border-white/10
                             transition hover:-translate-y-0.5 hover:bg-white/7 hover:border-sky-400/30 active:scale-[0.98]"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* HERO CARD */}
          <div ref={setSectionRef("hero")} {...reveal("hero", 90)} className="mt-8">
            <div className={`${cardBase} ${hoverLift} shimmerWrap group relative`}>
              <div className="shimmerLine" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute -inset-24 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-emerald-500/10 blur-2xl" />
              </div>

              <div className="relative p-5 sm:p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* identity */}
                  <div className="flex items-center gap-4">
                    <div
                      className="h-14 w-14 rounded-2xl grid place-items-center
                                 bg-gradient-to-br from-sky-500/25 to-indigo-500/20
                                 border border-white/10 transition group-hover:scale-[1.04]"
                    >
                      <span className="text-xl font-extrabold">
                        {String(name).slice(0, 1).toUpperCase()}
                      </span>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-xl font-semibold">{name}</h2>
                        <span className="text-[11px] px-2 py-1 rounded-full
                                         bg-emerald-500/10 text-emerald-200 border border-emerald-500/20
                                         transition hover:bg-emerald-500/15">
                          Verified (Demo)
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-slate-400">
                        Client Code:{" "}
                        <span className="text-slate-200 font-medium">{code}</span>
                        <span className="mx-2 text-slate-600">•</span>
                        Broker: <span className="text-slate-300">B2C</span>
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Last Login: <span className="text-slate-300">{lastLogin}</span>
                      </p>
                    </div>
                  </div>

                  {/* quick meta */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
                    {[
                      { label: "Email", value: email },
                      { label: "Status", value: "Active", tone: "text-emerald-300" },
                      { label: "Plan", value: "Pro (Demo)" },
                    ].map((x, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 transition
                                   hover:-translate-y-0.5 hover:border-indigo-400/25"
                      >
                        <p className="text-[11px] tracking-wide uppercase text-slate-500">
                          {x.label}
                        </p>
                        <p className={["mt-1 text-sm font-semibold", x.tone || "text-slate-200"].join(" ")}>
                          {x.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick actions row */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { t: "Tokens & Watch", d: "Track live instruments", to: "/tokens" },
                    { t: "Risk / RMS", d: "Funds & margins view", to: "/rms" },
                    { t: "Profile Settings", d: "Preferences (demo)", to: "/profile" },
                  ].map((x, i) => (
                    <button
                      key={i}
                      onClick={() => navigate(x.to)}
                      className="text-left rounded-2xl border border-white/10 bg-black/20 p-4
                                 transition hover:-translate-y-0.5 hover:border-sky-400/25 hover:bg-black/25"
                    >
                      <p className="text-sm font-semibold text-slate-100">{x.t}</p>
                      <p className="mt-1 text-xs text-slate-400">{x.d}</p>
                      <div className="mt-3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* MARKET WIDGETS */}
          <div ref={setSectionRef("market")} {...reveal("market", 140)} className="mt-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-100">Market Snapshot</h3>
                <p className="text-sm text-slate-400">Indices overview (demo) with premium micro-interactions.</p>
              </div>
              <button
                onClick={() => navigate("/tokens")}
                className="hidden sm:inline-flex rounded-xl px-4 py-2 text-sm font-semibold
                           bg-white/5 border border-white/10
                           transition hover:-translate-y-0.5 hover:border-sky-400/25 hover:bg-white/7"
              >
                Open Tokens →
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {marketSummary.map((m, i) => (
                <div
                  key={i}
                  className={`${cardBase} ${hoverLift} p-5 relative group`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="absolute -inset-12 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-emerald-500/10 blur-2xl" />
                  </div>

                  <div className="relative">
                    <p className="text-xs tracking-[0.18em] uppercase text-slate-500">
                      {m.title}
                    </p>

                    <p className="mt-2 text-xl font-bold text-slate-100">{m.value}</p>

                    <p
                      className={[
                        "mt-1 text-xs font-semibold",
                        m.info ? "text-sky-200/80" : m.pos ? "text-emerald-300" : "text-rose-300",
                      ].join(" ")}
                    >
                      {m.sub}
                    </p>

                    <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                      <span>Updated</span>
                      <span className="rounded-full px-2 py-1 bg-black/20 border border-white/10">
                        Live soon
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GRID */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* BASIC INFO */}
            <div ref={setSectionRef("basic")} {...reveal("basic", 190)} className="lg:col-span-7">
              <div className={`${cardBase} p-5 sm:p-6`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-100">Basic Information</h3>
                  <span className="text-xs text-slate-500">Updated now</span>
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {basicInfo.map((row, i) => (
                    <div
                      key={i}
                      className="group rounded-2xl border border-white/10 bg-black/20 p-4 transition
                                 hover:-translate-y-0.5 hover:border-sky-400/25 hover:bg-black/25"
                    >
                      <p className="text-[11px] tracking-[0.16em] uppercase text-slate-500">
                        {row.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-100 break-words">
                        {row.value}
                      </p>
                      <div className="mt-3 h-px w-0 bg-gradient-to-r from-sky-400/40 to-indigo-400/40 group-hover:w-full transition-all duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-5 space-y-6">
              {/* Exchanges */}
              <div ref={setSectionRef("ex")} {...reveal("ex", 230)}>
                <div className={`${cardBase} p-5 sm:p-6`}>
                  <h3 className="text-sm font-semibold text-slate-100">Exchanges Allowed</h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exchanges.map((x, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold
                                   bg-sky-500/10 text-sky-200 border border-sky-500/20
                                   transition hover:-translate-y-0.5 hover:bg-sky-500/15"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Products */}
              <div ref={setSectionRef("prod")} {...reveal("prod", 270)}>
                <div className={`${cardBase} p-5 sm:p-6`}>
                  <h3 className="text-sm font-semibold text-slate-100">Products Enabled</h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {products.map((p, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold
                                   bg-emerald-500/10 text-emerald-200 border border-emerald-500/20
                                   transition hover:-translate-y-0.5 hover:bg-emerald-500/15"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Demo profile screen. Next step: API connect + dynamic mapping + auth guards.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Strip */}
              <div ref={setSectionRef("cta")} {...reveal("cta", 310)}>
                <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-white/5 to-sky-500/10 backdrop-blur-xl
                                p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-100">Jump to Market Tools</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Tokens, watchlist & widgets aap yahin se open kar sakte hain.
                    </p>
                  </div>

                  <button
                    onClick={() => navigate("/tokens")}
                    className="rounded-xl px-4 py-2.5 font-semibold text-sm
                               bg-gradient-to-r from-indigo-400 to-sky-400 text-slate-950
                               transition hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.98]"
                  >
                    Go to Tokens
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* WATCHLIST + TRENDS */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Watchlist */}
            <div ref={setSectionRef("watch")} {...reveal("watch", 350)} className="lg:col-span-7">
              <div className={`${cardBase} p-5 sm:p-6`}>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">Watchlist</h3>
                    <p className="text-sm text-slate-400">Highest volume movers (demo).</p>
                  </div>

                  <button
                    onClick={() => navigate("/tokens")}
                    className="rounded-xl px-4 py-2 text-sm font-semibold
                               bg-white/5 border border-white/10
                               transition hover:-translate-y-0.5 hover:border-sky-400/25 hover:bg-white/7"
                  >
                    View All →
                  </button>
                </div>

                <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/20">
                  <table className="min-w-full text-left text-sm">
                    <thead className="text-xs uppercase text-slate-500">
                      <tr className="border-b border-white/10">
                        <th className="px-4 py-3">Symbol</th>
                        <th className="px-4 py-3 text-right">Price</th>
                        <th className="px-4 py-3 text-right">Change</th>
                        <th className="px-4 py-3 text-right">Volume</th>
                      </tr>
                    </thead>
                    <tbody>
                      {watchlist.map((x, i) => {
                        const pos = String(x.chg).startsWith("+");
                        return (
                          <tr
                            key={i}
                            className="border-b border-white/5 last:border-b-0 hover:bg-white/5 transition"
                          >
                            <td className="px-4 py-3 font-semibold text-slate-200">{x.sym}</td>
                            <td className="px-4 py-3 text-right text-slate-200">{x.price}</td>
                            <td className={`px-4 py-3 text-right font-semibold ${pos ? "text-emerald-300" : "text-rose-300"}`}>
                              {x.chg}
                            </td>
                            <td className="px-4 py-3 text-right text-slate-400">{x.vol}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  Note: Real watchlist me aap API / websocket se live feed le sakte hain.
                </p>
              </div>
            </div>

            {/* Community Trends */}
            <div ref={setSectionRef("trends")} {...reveal("trends", 390)} className="lg:col-span-5">
              <div className={`${cardBase} p-5 sm:p-6`}>
                <h3 className="text-lg font-semibold text-slate-100">Community Trends</h3>
                <p className="text-sm text-slate-400">What traders are discussing (demo).</p>

                <div className="mt-4 space-y-3">
                  {communityTrends.map((t, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4 transition
                                 hover:-translate-y-0.5 hover:border-sky-400/25 hover:bg-black/25"
                    >
                      <p className="text-sm font-semibold text-slate-200">{t.title}</p>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed">{t.desc}</p>
                      <div className="mt-3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex gap-2">
                  <button
                    onClick={() => navigate("/tokens")}
                    className="flex-1 rounded-xl px-4 py-2.5 font-semibold text-sm
                               bg-gradient-to-r from-sky-400 to-indigo-400 text-slate-950
                               transition hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.98]"
                  >
                    Open Market Tools
                  </button>
                  <button
                    onClick={() => navigate("/rms")}
                    className="flex-1 rounded-xl px-4 py-2.5 font-semibold text-sm
                               bg-white/5 border border-white/10
                               transition hover:-translate-y-0.5 hover:border-sky-400/25 hover:bg-white/7 active:scale-[0.98]"
                  >
                    Open RMS
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FOOT */}
          <div ref={setSectionRef("foot")} {...reveal("foot", 440)} className="mt-10 text-center">
            <p className="text-xs text-slate-600">TradeSmart UI • Profile Module (Premium Tailwind + Widgets)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
