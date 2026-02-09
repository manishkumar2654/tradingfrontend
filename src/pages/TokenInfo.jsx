import React, { useEffect, useRef, useState } from "react";

/* ===================== REVEAL ON SCROLL ===================== */
const useRevealOnScroll = () => {
  const refs = useRef([]);
  useEffect(() => {
    const els = refs.current.filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-show");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return refs;
};

const Reveal = ({ refs, idx, className = "", style, children }) => (
  <div
    ref={(el) => (refs.current[idx] = el)}
    className={`reveal ${className}`}
    style={style}
  >
    {children}
  </div>
);

const TokenInfo = () => {
  const revealRefs = useRevealOnScroll();
  const rootRef = useRef(null);

  // demo tokens (replace with real values from state/api later)
  const [jwtToken] = useState("eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkdW1teS1qd3QtdG9rZW4i...");
  const [refreshToken] = useState("eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1OTk0ODkwMz...");
  const [feedToken] = useState("eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyLWZlZWQtdG9rZW4i...");
  const [state] = useState("live");

  const [mask, setMask] = useState(true);
  const [toast, setToast] = useState("");

  const card =
    "rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950";
  const hoverCard = "ts-card transition duration-300";
  const softRow =
    "rounded-xl bg-slate-900/60 border border-slate-800/60 hover:bg-slate-900/80 hover:border-sky-400/25 transition duration-300";

  const btnPrimary =
    "ts-btn ts-btn-primary px-6 py-3 rounded-xl font-semibold text-slate-950";
  const btnGhost =
    "ts-btn ts-btn-ghost px-6 py-3 rounded-xl border border-slate-700 text-slate-200";

  const showToast = (msg) => {
    setToast(msg);
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(""), 2200);
  };

  const clip = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value || "");
      showToast(`${label} copied ✅`);
    } catch {
      showToast("Copy failed (browser permissions)");
    }
  };

  // Spotlight + scroll vars (same feel as UserLogin)
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    let raf = 0;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width) * 100;
      const my = ((e.clientY - r.top) / r.height) * 100;

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${mx}%`);
        el.style.setProperty("--my", `${my}%`);
      });
    };

    const onScroll = () => {
      const y = window.scrollY || 0;
      el.style.setProperty("--sy", String(y));
    };

    onScroll();
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const masked = (v = "") => {
    if (!v) return "";
    if (!mask) return v;
    const head = v.slice(0, 14);
    const tail = v.slice(-8);
    return `${head}••••••••••••••••••••${tail}`;
  };

  let r = 0;

  return (
    <div ref={rootRef} className="min-h-screen bg-[#0b1220] text-slate-100 ts-stage">
      {/* ===================== TOP HERO ===================== */}
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "0ms" }}>
        <section className="px-3 sm:px-6 pt-8 pb-6">
          <div className="max-w-7xl mx-auto">
            <div
              className={`relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0f172a] ${hoverCard}`}
            >
              <div className="absolute inset-0 ts-grid opacity-70" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_70%_35%,rgba(167,139,250,0.16),transparent_45%),radial-gradient(circle_at_40%_80%,rgba(34,197,94,0.12),transparent_45%)]" />

              <div className="relative p-5 sm:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/35 backdrop-blur px-3 py-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs text-slate-200/90">
                        Token Center • Secure Session • Demo UI
                      </span>
                    </div>

                    <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
                      Token{" "}
                      <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                        Information
                      </span>{" "}
                      Dashboard
                    </h1>

                    <p className="mt-3 text-slate-200/85 text-sm sm:text-lg max-w-xl">
                      Yahan aapke JWT / Refresh / Feed tokens ka secure overview milta hai — copy tools,
                      masking, best-practices aur quick actions ke saath.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {[
                        { tag: "🔐", text: "Masked View" },
                        { tag: "⚡", text: "One-click Copy" },
                        { tag: "🧩", text: "API Ready" },
                        { tag: "🛡️", text: "Security Tips" },
                      ].map((b, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs sm:text-sm bg-slate-950/35 border border-slate-800/80 backdrop-blur hover:border-sky-400/35 hover:bg-slate-900/40 transition"
                        >
                          <span className="text-sm">{b.tag}</span>
                          <span className="text-slate-200/90">{b.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      className={btnPrimary}
                      type="button"
                      onClick={() => showToast("Demo: Generate New Token")}
                    >
                      Generate New Token
                    </button>
                    <button
                      className={btnGhost}
                      type="button"
                      onClick={() => showToast("Demo: Navigate to Profile")}
                    >
                      Go to Profile
                    </button>
                    <button
                      className="ts-btn px-6 py-3 rounded-xl border border-slate-700 text-slate-200 bg-slate-950/30 hover:border-sky-400/35 transition"
                      type="button"
                      onClick={() => setMask((m) => !m)}
                      title="Show/Hide tokens"
                    >
                      {mask ? "Show Tokens" : "Hide Tokens"}
                    </button>
                  </div>
                </div>

                {/* mini stats */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { a: "JWT", b: "Auth header" },
                    { a: "Refresh", b: "Session renew" },
                    { a: "Feed", b: "Market stream" },
                    { a: state.toUpperCase(), b: "Current state" },
                  ].map((x, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-slate-800/80 bg-slate-950/35 backdrop-blur px-4 py-3 hover:border-sky-400/25 transition"
                    >
                      <div className="text-lg font-bold text-white">{x.a}</div>
                      <div className="text-[11px] text-slate-300/80">{x.b}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ===================== TOKENS GRID ===================== */}
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "80ms" }}>
        <section className="px-3 sm:px-6 py-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LEFT: token cards */}
            <div className="lg:col-span-8 space-y-6">
              {[
                { title: "JWT Token", value: jwtToken, rows: 3 },
                { title: "Refresh Token", value: refreshToken, rows: 3 },
                { title: "Feed Token", value: feedToken, rows: 2 },
              ].map((t, i) => (
                <div key={i} className={`${card} ${hoverCard} p-6`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{t.title}</h3>
                      <p className="text-slate-400 text-xs mt-1">
                        Tip: Token ko public repo / screenshot me kabhi share mat kijiye.
                      </p>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                      <button
                        className="ts-btn px-4 py-2 rounded-lg text-xs bg-slate-800/70 text-slate-200 hover:bg-slate-700 transition"
                        type="button"
                        onClick={() => clip(t.title, t.value)}
                      >
                        Copy
                      </button>
                      <button
                        className="ts-btn px-4 py-2 rounded-lg text-xs bg-slate-950/40 border border-slate-700 text-slate-200 hover:border-sky-400/30 transition"
                        type="button"
                        onClick={() => setMask((m) => !m)}
                      >
                        {mask ? "Unmask" : "Mask"}
                      </button>
                    </div>
                  </div>

                  <textarea
                    className="mt-4 w-full bg-[#0b1220] border border-slate-800 rounded-xl p-3 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400 hover:border-sky-400/25 transition"
                    rows={t.rows}
                    readOnly
                    value={masked(t.value)}
                  />
                </div>
              ))}

              {/* STATE */}
              <div className={`${card} ${hoverCard} p-6`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-white font-semibold text-lg">State</h3>
                    <p className="text-slate-400 text-xs mt-1">
                      Environment / session state indicator (demo).
                    </p>
                  </div>
                  <span className="px-3 py-1.5 rounded-full text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {state}
                  </span>
                </div>

                <input
                  type="text"
                  readOnly
                  value={state}
                  className="mt-4 w-full h-12 rounded-xl bg-[#0b1220] border border-slate-800 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400 hover:border-sky-400/25 transition"
                />
              </div>
            </div>

            {/* RIGHT: actions + info */}
            <div className="lg:col-span-4 space-y-6">
              {/* Quick Actions */}
              <div className={`${card} ${hoverCard} p-6`}>
                <h3 className="text-white font-semibold text-lg">Quick Actions</h3>
                <p className="text-slate-400 text-xs mt-1">
                  One place to manage token utilities.
                </p>

                <div className="mt-4 space-y-3">
                  {[
                    { t: "Copy All Tokens", d: "JWT + Refresh + Feed" },
                    { t: "Validate Session", d: "Check expiry & state" },
                    { t: "Open API Docs", d: "Headers & endpoints" },
                  ].map((x, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`w-full flex items-center justify-between px-4 py-3 ${softRow}`}
                      onClick={() => showToast(`Demo: ${x.t}`)}
                    >
                      <span className="text-sm text-slate-200 font-medium">{x.t}</span>
                      <span className="text-xs text-slate-400">{x.d}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button className={`${btnPrimary} w-full`} type="button" onClick={() => showToast("Demo: Generate Token")}>
                    Generate
                  </button>
                  <button className={`${btnGhost} w-full`} type="button" onClick={() => showToast("Demo: Logout")}>
                    Logout
                  </button>
                </div>
              </div>

              {/* Security Tips */}
              <div className={`${card} ${hoverCard} p-6`}>
                <h3 className="text-white font-semibold text-lg">Security Checklist</h3>
                <div className="mt-4 space-y-3">
                  {[
                    "Token ko localStorage me save karna avoid kijiye (production me).",
                    "Refresh token ko server-side secure store karein.",
                    "HTTPS/TLS ensure karein + CORS restrict karein.",
                    "Token rotation + expiry handling implement karein.",
                  ].map((t, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                      <p className="text-sm text-slate-300">{t}</p>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="ts-btn mt-5 w-full px-6 py-3 rounded-xl bg-slate-800 text-slate-100 hover:bg-slate-700 transition"
                  onClick={() => showToast("Demo: Open Security Guide")}
                >
                  View Security Guide
                </button>
              </div>

              {/* Help / Support */}
              <div className={`${card} ${hoverCard} p-6`}>
                <h3 className="text-white font-semibold text-lg">Need Help?</h3>
                <p className="text-slate-400 text-xs mt-1">
                  Angel One SmartAPI token flow (demo).
                </p>

                <div className="mt-4 space-y-3">
                  {[
                    { q: "TOTP mismatch aa raha hai?", a: "Mobile time sync (auto) on kijiye." },
                    { q: "JWT expired?", a: "Refresh token se renew call kijiye." },
                    { q: "Feed not connecting?", a: "Feed token + ws endpoint verify kijiye." },
                  ].map((x, i) => (
                    <details key={i} className={`${softRow} p-4 cursor-pointer group overflow-hidden`}>
                      <summary className="list-none flex items-center justify-between gap-3">
                        <span className="text-sm text-slate-200 font-medium">{x.q}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition">▾</span>
                      </summary>
                      <p className="mt-2 text-xs text-slate-400 leading-relaxed">{x.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ===================== HOW IT WORKS ===================== */}
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "90ms" }}>
        <section className="px-3 sm:px-6 py-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Token Flow,{" "}
                <span className="text-sky-400">Simple & Clean</span>
              </h2>
              <p className="mt-2 text-slate-400 max-w-2xl mx-auto">
                Ye sections aapko token usage + best-practices ek hi jagah dikhata hai.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  n: "1",
                  t: "Login / Auth",
                  d: "Client Code + PIN + TOTP → JWT generate hota hai.",
                  c: "bg-blue-600",
                },
                {
                  n: "2",
                  t: "Use APIs",
                  d: "JWT ko Authorization header me pass karke endpoints call karein.",
                  c: "bg-green-600",
                },
                {
                  n: "3",
                  t: "Refresh / Feed",
                  d: "Expiry par refresh token se renew, feed token se live streaming.",
                  c: "bg-violet-600",
                },
              ].map((x, i) => (
                <div key={i} className={`${card} ${hoverCard} p-7`}>
                  <div
                    className={`w-14 h-14 rounded-2xl ${x.c} flex items-center justify-center text-white font-bold text-xl`}
                  >
                    {x.n}
                  </div>
                  <h3 className="mt-4 text-white font-semibold text-xl">{x.t}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{x.d}</p>
                  <button
                    type="button"
                    className="ts-btn mt-5 text-sky-300 text-sm font-medium hover:underline hover:translate-x-1 transition"
                    onClick={() => showToast(`Demo: ${x.t} details`)}
                  >
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>















              


      {/* ===================== CENTER TEXT ===================== */}
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "60ms" }}>
        <section className="min-h-[20vh] w-full flex items-center justify-center py-10 overflow-hidden">
          <div className="text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 leading-tight">
              Open a free demat and trading account online
            </h1>
            <h4 className="text-base sm:text-lg text-gray-400 leading-snug">
              Start investing brokerage free and join a community of 1.6+ crore
              investors and traders
            </h4>
          </div>
        </section>
      </Reveal>

      {/* ======================= MARKET SUMMARY ======================= */}
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "80ms" }}>
        <section className="w-full px-3 sm:px-6 py-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Market Summary
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Quick snapshot of today’s market performance & key movements
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  t: "NIFTY 50",
                  v: "22,450.35",
                  d: "▲ +124.30 (0.56%)",
                  c: "text-emerald-400",
                },
                {
                  t: "BANK NIFTY",
                  v: "48,120.10",
                  d: "▼ −210.45 (0.43%)",
                  c: "text-rose-400",
                },
                {
                  t: "Sensex",
                  v: "74,985.20",
                  d: "▲ +356.90 (0.48%)",
                  c: "text-emerald-400",
                },
                {
                  t: "India VIX",
                  v: "13.42",
                  d: "Low volatility zone",
                  c: "text-sky-400",
                },
              ].map((x, i) => (
                <div key={i} className={`${card} ${hoverCard} p-4`}>
                  <p className="text-xs text-slate-400">{x.t}</p>
                  <h4 className={`text-xl font-bold mt-1 ${x.c}`}>{x.v}</h4>
                  <p className={`text-xs mt-1 ${x.c}`}>{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ======================= MARKET MOVERS ======================= */}
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "90ms" }}>
        <section className="w-full px-3 sm:px-6 py-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Market Movers
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Stocks with highest trading activity & price volatility today
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-6">
                <div className={`${card} ${hoverCard} p-5`}>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Highest Volume Stocks
                  </h4>

                  <div className="space-y-3">
                    {[
                      {
                        name: "RELIANCE",
                        price: "2,945.30",
                        change: "+2.14%",
                        vol: "8.2M",
                      },
                      {
                        name: "HDFCBANK",
                        price: "1,642.10",
                        change: "-1.02%",
                        vol: "6.9M",
                      },
                      {
                        name: "ICICIBANK",
                        price: "1,095.85",
                        change: "+0.88%",
                        vol: "6.1M",
                      },
                      {
                        name: "INFY",
                        price: "1,598.20",
                        change: "-0.45%",
                        vol: "5.7M",
                      },
                    ].map((s, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between px-4 py-3 ${softRow}`}
                      >
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {s.name}
                          </p>
                          <p className="text-xs text-slate-400">Vol: {s.vol}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-white">
                            ₹{s.price}
                          </p>
                          <p
                            className={`text-xs ${s.change.startsWith("+") ? "text-emerald-400" : "text-rose-400"}`}
                          >
                            {s.change}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className={`${card} ${hoverCard} p-5`}>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Most Volatile Stocks
                  </h4>

                  <div className="space-y-3">
                    {[
                      {
                        name: "ADANIENT",
                        price: "3,120.45",
                        change: "+4.85%",
                        range: "6.2%",
                      },
                      {
                        name: "TATASTEEL",
                        price: "145.80",
                        change: "-3.40%",
                        range: "5.1%",
                      },
                      {
                        name: "SBIN",
                        price: "724.30",
                        change: "+2.96%",
                        range: "4.7%",
                      },
                      {
                        name: "JSWSTEEL",
                        price: "902.60",
                        change: "-2.15%",
                        range: "4.3%",
                      },
                    ].map((s, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between px-4 py-3 ${softRow}`}
                      >
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {s.name}
                          </p>
                          <p className="text-xs text-slate-400">
                            Range: {s.range}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-white">
                            ₹{s.price}
                          </p>
                          <p
                            className={`text-xs ${s.change.startsWith("+") ? "text-emerald-400" : "text-rose-400"}`}
                          >
                            {s.change}
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
      </Reveal>

      {/* ======================= ADVANCED CHARTS ======================= */}
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "70ms" }}>
        <section className="w-full px-3 sm:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Advanced Charts
              </h2>
              <p className="text-slate-400 text-sm mt-1 max-w-3xl">
                Professional-grade charting tools with multi-timeframe analysis,
                technical indicators and real-time price action.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8">
                <div
                  className={`group relative h-[420px] ${card} ${hoverCard} overflow-hidden`}
                >
                  <div className="absolute inset-0 ts-grid" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-slate-500 text-sm">
                      Interactive Candlestick Chart (Demo)
                    </p>
                  </div>

                  <div className="absolute top-3 left-3 flex gap-2">
                    {["1m", "5m", "15m", "1H", "1D"].map((t) => (
                      <button
                        key={t}
                        className="ts-btn px-3 py-1 rounded-lg text-xs bg-slate-800/70 text-slate-300 hover:bg-slate-700 transition"
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <div className="absolute top-3 right-3 flex gap-2">
                    {["EMA", "RSI", "MACD"].map((i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs bg-slate-800/70 text-sky-400 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-4">
                {[
                  {
                    title: "Multi-Timeframe Analysis",
                    text: "Analyze price action across multiple timeframes to identify trends and reversals.",
                  },
                  {
                    title: "Technical Indicators",
                    text: "Apply EMA, RSI, MACD, Bollinger Bands and custom indicators.",
                  },
                  {
                    title: "Drawing Tools",
                    text: "Trendlines, Fibonacci retracements, channels and support-resistance zones.",
                  },
                ].map((tool, i) => (
                  <div key={i} className={`${card} ${hoverCard} p-4`}>
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
      </Reveal>

      {/* ======================= BIO CHART ======================= */}
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "70ms" }}>
        <section className="w-full px-3 sm:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Bio Chart Analysis
              </h2>
              <p className="text-slate-400 text-sm mt-1 max-w-3xl">
                Market breadth indicators showing internal market strength,
                participation and momentum across stocks.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7">
                <div
                  className={`relative h-[380px] ${card} ${hoverCard} overflow-hidden`}
                >
                  <div className="absolute inset-0 ts-grid" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-slate-500 text-sm">
                      Market Breadth / Bio Chart (Demo)
                    </p>
                  </div>

                  <div className="absolute bottom-4 left-4 flex gap-3">
                    <span className="flex items-center gap-1 text-xs text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400"></span>{" "}
                      Advancing
                    </span>
                    <span className="flex items-center gap-1 text-xs text-rose-400">
                      <span className="h-2 w-2 rounded-full bg-rose-400"></span>{" "}
                      Declining
                    </span>
                    <span className="flex items-center gap-1 text-xs text-sky-400">
                      <span className="h-2 w-2 rounded-full bg-sky-400"></span>{" "}
                      Unchanged
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                {[
                  {
                    title: "Advance–Decline Ratio",
                    text: "Compares number of advancing stocks versus declining stocks to assess market strength.",
                  },
                  {
                    title: "Market Participation",
                    text: "Shows how broadly the market is moving rather than index-only movement.",
                  },
                  {
                    title: "Momentum Confirmation",
                    text: "Helps confirm trend continuation or potential reversals.",
                  },
                ].map((item, i) => (
                  <div key={i} className={`${card} ${hoverCard} p-4`}>
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
      </Reveal>





      

      {/* ======================= FX BLUE ======================= */}
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "80ms" }}>
        <section className="w-full  py-14 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              FX Blue Expert Advisors
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto mb-12">
              Professional automated trading systems powered by FX Blue. Monitor
              strategies, analyze performance, and manage risk.
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
              <button className="ts-btn px-7 py-3 rounded-full bg-slate-800 text-slate-100 hover:bg-slate-700 transition">
                Explore FX Blue Tools
              </button>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ======================= MARKET SNAPSHOT ======================= */}
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "60ms" }}>
        <section className="w-full  px-4 sm:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Market Snapshot
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Key global and domestic indicators shaping today’s markets
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  t: "Crypto Market Cap",
                  v: "$1.87T",
                  c: "text-green-400",
                  d: "Overall market strength and sentiment.",
                },
                {
                  t: "USD → INR",
                  v: "₹83.12",
                  c: "text-yellow-400",
                  d: "Impacts equities, imports/exports flows.",
                },
                {
                  t: "India 10Y Yield",
                  v: "7.18%",
                  c: "text-red-400",
                  d: "Long-term rates and inflation expectations.",
                },
              ].map((x, i) => (
                <div key={i} className={`${card} ${hoverCard} p-5`}>
                  <h4 className="text-sm font-semibold text-slate-200 mb-2">
                    {x.t}
                  </h4>
                  <div className={`text-2xl font-bold mb-1 ${x.c}`}>{x.v}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {x.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ======================= ECONOMIC CALENDAR ======================isko krna hai  = */}
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "70ms" }}>
        <section className="w-full  px-4 sm:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Economic Calendar
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Track upcoming economic events that can impact global markets
              </p>
            </div>

            <div
              className={`overflow-x-auto rounded-2xl border border-slate-800 ${hoverCard}`}
            >
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
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${x.impC}`}
                        >
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
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "70ms" }}>
        <section className="w-full  px-4 sm:px-6 py-12">
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
                    {
                      name: "Crude Oil",
                      sub: "WTI · USD",
                      price: "78.42",
                      chg: "+0.85%",
                      pos: true,
                    },
                    {
                      name: "Brent Oil",
                      sub: "ICE · USD",
                      price: "82.10",
                      chg: "-0.42%",
                      pos: false,
                    },
                    {
                      name: "Natural Gas",
                      sub: "NYMEX · USD",
                      price: "2.48",
                      chg: "+1.32%",
                      pos: true,
                    },
                  ].map((x, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between p-3 ${softRow}`}
                    >
                      <div>
                        <p className="text-sm font-medium text-slate-200">
                          {x.name}
                        </p>
                        <span className="text-xs text-slate-400">{x.sub}</span>
                      </div>
                      <div className="text-right">
                        <p
                          className={`text-sm font-semibold ${x.pos ? "text-green-400" : "text-red-400"}`}
                        >
                          {x.price}
                        </p>
                        <span
                          className={`text-xs ${x.pos ? "text-green-400" : "text-red-400"}`}
                        >
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
                    {
                      name: "Gold",
                      sub: "COMEX · USD",
                      price: "2038.6",
                      chg: "+0.21%",
                      pos: true,
                    },
                    {
                      name: "Silver",
                      sub: "COMEX · USD",
                      price: "24.68",
                      chg: "-0.56%",
                      pos: false,
                    },
                    {
                      name: "Copper",
                      sub: "LME · USD",
                      price: "4.12",
                      chg: "+0.74%",
                      pos: true,
                    },
                  ].map((x, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between p-3 ${softRow}`}
                    >
                      <div>
                        <p className="text-sm font-medium text-slate-200">
                          {x.name}
                        </p>
                        <span className="text-xs text-slate-400">{x.sub}</span>
                      </div>
                      <div className="text-right">
                        <p
                          className={`text-sm font-semibold ${x.pos ? "text-green-400" : "text-red-400"}`}
                        >
                          {x.price}
                        </p>
                        <span
                          className={`text-xs ${x.pos ? "text-green-400" : "text-red-400"}`}
                        >
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
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "70ms" }}>
        <section className="w-full  px-4 sm:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Forex Performance
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Performance overview of major currency pairs in global forex
                markets
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  pair: "EUR / USD",
                  val: "1.0842",
                  chg: "+0.36%",
                  pos: true,
                  desc: "Euro gaining strength against US Dollar amid easing inflation outlook.",
                },
                {
                  pair: "GBP / USD",
                  val: "1.2715",
                  chg: "-0.18%",
                  pos: false,
                  desc: "Pound under pressure ahead of key UK economic data releases.",
                },
                {
                  pair: "USD / INR",
                  val: "83.12",
                  chg: "+0.09%",
                  pos: true,
                  desc: "Dollar strengthens slightly against Rupee on global risk-off sentiment.",
                },
                {
                  pair: "USD / JPY",
                  val: "148.76",
                  chg: "-0.42%",
                  pos: false,
                  desc: "Yen rebounds as traders assess Bank of Japan policy stance.",
                },
                {
                  pair: "AUD / USD",
                  val: "0.6584",
                  chg: "+0.51%",
                  pos: true,
                  desc: "Australian Dollar supported by rising commodity prices.",
                },
                {
                  pair: "EUR / GBP",
                  val: "0.8531",
                  chg: "-0.27%",
                  pos: false,
                  desc: "Euro weakens slightly against Pound in short-term consolidation.",
                },
              ].map((x, i) => (
                <div key={i} className={`${card} ${hoverCard} p-5`}>
                  <h4 className="text-sm font-semibold text-slate-200 mb-1">
                    {x.pair}
                  </h4>
                  <div className="flex items-end justify-between mb-2">
                    <span
                      className={`text-2xl font-bold ${x.pos ? "text-green-400" : "text-red-400"}`}
                    >
                      {x.val}
                    </span>
                    <span
                      className={`text-sm ${x.pos ? "text-green-400" : "text-red-400"}`}
                    >
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
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "80ms" }}>
        <section className="w-full  px-4 sm:px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                  Fully Equipped Trading Platform
                </h2>
                <p className="text-slate-400 max-w-xl mb-6">
                  Trade confidently with a complete suite of professional tools
                  designed for modern traders.
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
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "80ms" }}>
        <section className="w-full  px-4 sm:px-6 py-14">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Indian Stocks & Community Trends
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Track market movers and see what traders across the community
                are watching
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 space-y-4">
                {[
                  {
                    name: "Reliance Industries",
                    price: "2,845.40",
                    chg: "+1.24%",
                  },
                  { name: "TCS", price: "3,982.10", chg: "-0.48%" },
                  { name: "HDFC Bank", price: "1,586.75", chg: "+0.92%" },
                  { name: "Infosys", price: "1,672.30", chg: "+1.68%" },
                ].map((stock, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between rounded-xl border border-slate-800 ${hoverCard} bg-gradient-to-b from-slate-900 to-slate-950 px-4 py-3`}
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
                        className={`text-xs ${stock.chg.startsWith("+") ? "text-green-400" : "text-red-400"}`}
                      >
                        {stock.chg}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

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
                  <div key={i} className={`${card} ${hoverCard} p-4`}>
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
      </Reveal>

      {/* ======================= INTERESTED? ======================= */}
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "70ms" }}>
        <section className="w-full  px-4 sm:px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Interested? Learn More
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
                Explore different trading opportunities and choose what fits
                your investment style and financial goals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Trading",
                  desc: "Trade stocks, indices and commodities with real-time data and powerful analytical tools.",
                },
                {
                  title: "Forex Trading",
                  desc: "Access global currency markets with advanced charts, indicators and professional execution.",
                },
                {
                  title: "Funds",
                  desc: "Invest in diversified funds and manage risk with long-term growth strategies.",
                },
              ].map((x, i) => (
                <div key={i} className={`${card} ${hoverCard} p-6`}>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {x.title}
                  </h4>
                  <p className="text-sm text-slate-400 mb-5">{x.desc}</p>
                  <button className="ts-btn text-sky-400 text-sm font-medium hover:underline hover:translate-x-1 transition">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="ts-btn px-8 py-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-slate-900 font-semibold hover:scale-[1.02] transition">
                Explore All Opportunities
              </button>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ======================= OUR MARKET, YOUR CALL ======================= */}
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "80ms" }}>
        <section className="w-full  py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Our Market, <span className="text-blue-500">Your Call</span>
              </h2>
              <p className="mt-5 text-gray-400 text-lg">
                Trade global markets with confidence. Stocks, Forex, Crypto and
                Futures — powered by real-time data and smart tools.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    dot: "bg-blue-500",
                    t: "Institutional-grade trading tools",
                  },
                  {
                    dot: "bg-green-500",
                    t: "Live market data & deep insights",
                  },
                  { dot: "bg-purple-500", t: "Trade anytime, anywhere" },
                ].map((x, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${x.dot}`} />
                    <p className="text-gray-300">{x.t}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="ts-btn px-7 py-3 bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] transition rounded-lg text-white font-semibold">
                  Start Trading
                </button>
                <button className="ts-btn px-7 py-3 border border-gray-600 hover:border-blue-500 transition rounded-lg text-gray-300 hover:text-white">
                  Learn More
                </button>
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
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "80ms" }}>
        <section className="w-full  py-20 px-4">
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
                Own Your{" "}
                <span className="text-blue-500">Trading Experience</span>
              </h2>

              <p className="mt-6 text-gray-400 text-lg">
                Take full control of your trades with advanced tools, real-time
                data and a platform built for speed and precision.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    dot: "bg-blue-500",
                    t: "Fully customizable trading interface",
                  },
                  { dot: "bg-green-500", t: "Advanced charts & indicators" },
                  {
                    dot: "bg-purple-500",
                    t: "Powerful risk & order management",
                  },
                ].map((x, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${x.dot}`} />
                    <p className="text-gray-300">{x.t}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="ts-btn px-8 py-3 bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] transition rounded-lg text-white font-semibold">
                  Get Started
                </button>
                <button className="ts-btn px-8 py-3 border border-gray-600 hover:border-blue-500 transition rounded-lg text-gray-300 hover:text-white">
                  Explore Platform
                </button>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ======================= PRICING ======================= */}
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "90ms" }}>
        <section className="w-full  py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Buy More, <span className="text-green-500">Pay Less</span>
              </h2>
              <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
                Trade smarter with volume-based pricing. The more you trade, the
                lower your costs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`${card} ${hoverCard} p-8`}>
                <h4 className="text-xl font-semibold text-white mb-2">
                  Starter
                </h4>
                <p className="text-gray-400 text-sm mb-6">
                  For new & casual traders
                </p>
                <div className="text-4xl font-bold text-white mb-4">
                  ₹20 <span className="text-sm text-gray-400">/ trade</span>
                </div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li>✔ Equity & Forex access</li>
                  <li>✔ Standard execution speed</li>
                  <li>✔ Basic analytics</li>
                </ul>
                <button className="ts-btn mt-8 w-full py-3 bg-gray-800 hover:bg-green-600 transition rounded-lg text-white font-medium">
                  Start Trading
                </button>
              </div>

              <div
                className={`relative ${card} p-8 border border-green-600 rounded-2xl scale-[1.02] shadow-xl ${hoverCard}`}
              >
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-xs px-4 py-1 rounded-full text-white">
                  Most Popular
                </span>
                <h4 className="text-xl font-semibold text-white mb-2">
                  Pro Trader
                </h4>
                <p className="text-gray-400 text-sm mb-6">
                  For active market players
                </p>
                <div className="text-4xl font-bold text-white mb-4">
                  ₹10 <span className="text-sm text-gray-400">/ trade</span>
                </div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li>✔ Ultra-fast execution</li>
                  <li>✔ Advanced charts & tools</li>
                  <li>✔ Priority order routing</li>
                </ul>
                <button className="ts-btn mt-8 w-full py-3 bg-green-600 hover:bg-green-700 transition rounded-lg text-white font-semibold">
                  Upgrade Now
                </button>
              </div>

              <div className={`${card} ${hoverCard} p-8`}>
                <h4 className="text-xl font-semibold text-white mb-2">Elite</h4>
                <p className="text-gray-400 text-sm mb-6">
                  For high-volume traders
                </p>
                <div className="text-4xl font-bold text-white mb-4">
                  ₹0 <span className="text-sm text-gray-400">Brokerage*</span>
                </div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li>✔ Zero brokerage on select trades</li>
                  <li>✔ Dedicated account manager</li>
                  <li>✔ Custom trading strategies</li>
                </ul>
                <button className="ts-btn mt-8 w-full py-3 bg-gray-800 hover:bg-green-600 transition rounded-lg text-white font-medium">
                  Contact Sales
                </button>
              </div>
            </div>

            <p className="text-center text-xs text-gray-500 mt-10">
              *Brokerage benefits may vary based on product and market
              conditions.
            </p>
          </div>
        </section>
      </Reveal>

      {/* ======================= 3 STEPS ======================= */}
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "90ms" }}>
        <section className="w-full  py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Open Your Account in{" "}
              <span className="text-blue-500">3 Simple Steps</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
              Get started with TradeSmart quickly and securely.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                {
                  n: "1",
                  bg: "bg-blue-600",
                  title: "Sign Up",
                  desc: "Create a secure TradeSmart account in minutes.",
                },
                {
                  n: "2",
                  bg: "bg-green-600",
                  title: "Verify Identity",
                  desc: "Complete KYC verification securely.",
                },
                {
                  n: "3",
                  bg: "bg-purple-600",
                  title: "Start Trading",
                  desc: "Fund your account and start trading.",
                },
              ].map((x, i) => (
                <div key={i} className={`${card} ${hoverCard} p-8`}>
                  <div
                    className={`w-16 h-16 mx-auto flex items-center justify-center ${x.bg} text-white rounded-full font-bold text-xl mb-6`}
                  >
                    {x.n}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {x.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{x.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <button className="ts-btn px-10 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold text-lg">
                Open Your Account Now
              </button>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ======================= TESTIMONIALS ======================= */}
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "90ms" }}>
        <section className="w-full  py-20 px-4">
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
                  quote:
                    '"TradeSmart has changed the way I trade. Execution is lightning fast!"',
                  name: "Rohit Sharma",
                  role: "Professional Trader",
                  img: "https://i.pravatar.cc/50?img=1",
                },
                {
                  quote:
                    '"Multi-asset access in one place. Execution speed is unmatched."',
                  name: "Anjali Mehta",
                  role: "Active Trader",
                  img: "https://i.pravatar.cc/50?img=2",
                },
                {
                  quote:
                    '"Advanced charts helped me make informed decisions daily."',
                  name: "Manish Kumar",
                  role: "Forex Trader",
                  img: "https://i.pravatar.cc/50?img=3",
                },
              ].map((x, i) => (
                <div key={i} className={`${card} ${hoverCard} p-8 shadow-lg`}>
                  <p className="text-gray-300 italic mb-6">{x.quote}</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={x.img}
                      alt={x.name}
                      className="w-12 h-12 rounded-full border border-gray-700"
                    />
                    <div className="text-left">
                      <h4 className="text-white font-semibold">{x.name}</h4>
                      <p className="text-gray-400 text-sm">{x.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <button className="ts-btn px-10 py-4 bg-pink-500 hover:bg-pink-600 transition rounded-lg text-white font-semibold text-lg">
                Join Our Community
              </button>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ======================= FAQs ======================= */}
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "70ms" }}>
        <section className="w-full  py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Trading Platforms <span className="text-blue-500">FAQs</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Find answers to the most common questions about our trading
                platform.
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                {
                  q: "Which markets can I trade on TradeSmart?",
                  a: "You can trade Stocks, Forex, Futures, Options, and Cryptocurrencies using our platform.",
                },
                {
                  q: "Is there a mobile app for trading?",
                  a: "Yes, TradeSmart offers a mobile app for iOS and Android with full functionality and real-time updates.",
                },
                {
                  q: "How do I connect my brokerage account?",
                  a: "Login and follow the secure authentication steps to link your brokerage account.",
                },
                {
                  q: "Is my data secure on TradeSmart?",
                  a: "Yes, we follow industry-standard encryption and security protocols to protect your data.",
                },
              ].map((x, i) => (
                <details
                  key={i}
                  className={`${card} ${hoverCard} p-6 cursor-pointer group overflow-hidden`}
                >
                  <summary className="text-white font-semibold text-lg list-none flex items-center justify-between">
                    <span>{x.q}</span>
                    <span className="text-slate-400 group-open:rotate-180 transition">
                      ▾
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                    {x.a}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="ts-btn px-10 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold text-lg">
                Visit Full FAQ Section
              </button>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ======================= UNIQUE TOOLS ======================= */}
      <Reveal refs={revealRefs} idx={r++} style={{ "--d": "80ms" }}>
        <section className="w-full  py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Trading Tools{" "}
                <span className="text-blue-500">
                  You Won’t Find Anywhere Else
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Explore a unique suite of tools designed for smart, informed,
                and faster trading.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  t: "Live Market Scanner",
                  d: "Scan thousands of assets in real-time to spot trends and opportunities instantly.",
                },
                {
                  t: "Advanced Charting Tools",
                  d: "Multi-timeframe charts with technical indicators and drawing tools.",
                },
                {
                  t: "Smart Alerts & Notifications",
                  d: "Instant alerts for price moves, volume spikes, news and patterns.",
                },
                {
                  t: "AI-Powered Insights",
                  d: "Data-driven insights & predictive signals for smarter decisions.",
                },
              ].map((x, i) => (
                <div key={i} className={`${card} ${hoverCard} p-6 shadow-lg`}>
                  <h4 className="text-white font-semibold mb-2">{x.t}</h4>
                  <p className="text-gray-400 text-sm">{x.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="ts-btn px-10 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold text-lg">
                Explore All Tools
              </button>
            </div>
          </div>
        </section>
      </Reveal>

















      {/* ===================== FOOTER ===================== */}
      <footer className="text-center text-slate-400 py-10 border-t border-slate-800">
        © 2026 TradeSmart • Token Center • Demo UI
      </footer>

      {/* Toast */}
      {toast ? (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[9999]">
          <div className="rounded-full border border-slate-700 bg-slate-950/70 backdrop-blur px-4 py-2 text-sm text-slate-200 shadow-2xl">
            {toast}
          </div>
        </div>
      ) : null}

      {/* ===================== GLOBAL STYLES (same family as UserLogin) ===================== */}
      <style>{`
/* ===================== CINEMATIC STAGE ===================== */
.ts-stage{
  position: relative;
  isolation: isolate;
  --mx: 50%;
  --my: 40%;
  --sy: 0;
}
.ts-stage::before{
  content:"";
  position: fixed;
  inset: 0;
  pointer-events:none;
  z-index: 0;
  background:
    radial-gradient(800px 520px at var(--mx) var(--my), rgba(56,189,248,.18), transparent 60%),
    radial-gradient(700px 480px at calc(var(--mx) + 10%) calc(var(--my) + 15%), rgba(167,139,250,.14), transparent 55%),
    radial-gradient(900px 520px at 20% 120%, rgba(34,197,94,.10), transparent 55%);
  mix-blend-mode: screen;
  opacity: .95;
}
.ts-stage::after{
  content:"";
  position: fixed;
  inset: 0;
  pointer-events:none;
  z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.18'/%3E%3C/svg%3E");
  opacity: .10;
}
.ts-stage > *{ position: relative; z-index: 1; }

/* grid overlay utility */
.ts-grid{
  background-image:
    linear-gradient(to right, rgba(148,163,184,.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(148,163,184,.06) 1px, transparent 1px);
  background-size: 46px 46px;
  mask-image: radial-gradient(circle at 50% 50%, rgba(0,0,0,.75), transparent 70%);
}

/* ===================== REVEAL ===================== */
.reveal{
  opacity: 0;
  transform: translateY(26px) scale(.98);
  filter: blur(10px);
  transition: opacity .85s cubic-bezier(.2,.9,.2,1),
              transform .85s cubic-bezier(.2,.9,.2,1),
              filter .95s ease;
  transition-delay: var(--d, 0ms);
}
.reveal-show{
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

/* ===================== CARDS (3D + shine) ===================== */
.ts-card{
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  will-change: transform;
}
.ts-card::before{
  content:"";
  position:absolute;
  inset:-2px;
  background: linear-gradient(120deg, rgba(56,189,248,.0), rgba(56,189,248,.18), rgba(167,139,250,.12), rgba(56,189,248,0));
  opacity: 0;
  filter: blur(10px);
  transition: opacity .35s ease;
  pointer-events:none;
}
.ts-card::after{
  content:"";
  position:absolute;
  top:-60%;
  left:-40%;
  width: 60%;
  height: 220%;
  transform: rotate(18deg) translateX(-40%);
  background: linear-gradient(to right, transparent, rgba(255,255,255,.10), transparent);
  opacity: 0;
  transition: transform .9s ease, opacity .35s ease;
  pointer-events:none;
}
.ts-card:hover{
  transform: translateY(-6px) perspective(1200px) rotateX(2deg) rotateY(-2deg);
  box-shadow: 0 18px 70px rgba(0,0,0,.55);
}
.ts-card:hover::before{ opacity: 1; }
.ts-card:hover::after{
  opacity: 1;
  transform: rotate(18deg) translateX(220%);
}

/* ===================== BUTTONS ===================== */
.ts-btn{
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  transition: transform .25s cubic-bezier(.2,.9,.2,1), box-shadow .25s ease, filter .25s ease;
  will-change: transform;
}
.ts-btn::before{
  content:"";
  position:absolute;
  inset:-2px;
  background: radial-gradient(120px 80px at 50% 50%, rgba(255,255,255,.28), transparent 55%);
  opacity: 0;
  transition: opacity .25s ease;
  pointer-events:none;
}
.ts-btn::after{
  content:"";
  position:absolute;
  top:-60%;
  left:-30%;
  width: 40%;
  height: 220%;
  transform: rotate(22deg) translateX(-60%);
  background: linear-gradient(to right, transparent, rgba(255,255,255,.18), transparent);
  opacity: .0;
  transition: transform .85s ease, opacity .25s ease;
  pointer-events:none;
}
.ts-btn:hover{
  transform: translateY(-2px) scale(1.02);
  filter: saturate(1.15);
}
.ts-btn:hover::before{ opacity: 1; }
.ts-btn:hover::after{
  opacity: .9;
  transform: rotate(22deg) translateX(260%);
}
.ts-btn:active{ transform: translateY(0) scale(.99); }

.ts-btn-primary{
  background: linear-gradient(90deg, rgb(56,189,248), rgb(59,130,246));
  box-shadow: 0 12px 40px rgba(56,189,248,.18);
}
.ts-btn-primary:hover{ box-shadow: 0 18px 70px rgba(56,189,248,.26); }

.ts-btn-ghost{ background: rgba(15,23,42,.35); }
.ts-btn-ghost:hover{
  box-shadow: 0 18px 70px rgba(0,0,0,.40);
  border-color: rgba(56,189,248,.35);
}

/* optional: parallax helper */
.ts-parallax{ transform: translateY(calc(var(--sy) * -0.02px)); }
      `}</style>
    </div>
  );
};

export default TokenInfo;
