import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaUser,
  FaWallet,
  FaUserCircle,
  FaMoneyBillWave,
  FaSignOutAlt,
} from "react-icons/fa";

/* ---------- Logo (inline) ---------- */
const TradeSmartLogo = ({ size = 28 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ts_g" x1="10" y1="54" x2="54" y2="10">
          <stop stopColor="#22d3ee" />
          <stop offset="0.55" stopColor="#60a5fa" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
        <filter id="ts_glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 0.55 0
            "
            result="glow"
          />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="ts_dark" x1="10" y1="50" x2="50" y2="14">
          <stop stopColor="#0b1220" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      <path
        d="M12 44c0 6.6 5.4 12 12 12h16c6.6 0 12-5.4 12-12V20c0-6.6-5.4-12-12-12H24c-6.6 0-12 5.4-12 12v24Z"
        fill="url(#ts_dark)"
        stroke="#1f2937"
        strokeOpacity="0.7"
      />

      <path d="M18 40h28" stroke="#334155" strokeOpacity="0.45" strokeLinecap="round" />

      <g filter="url(#ts_glow)">
        <rect x="19" y="34" width="6" height="12" rx="2" fill="url(#ts_g)" opacity="0.9" />
        <rect x="29" y="28" width="6" height="18" rx="2" fill="url(#ts_g)" opacity="0.95" />
        <rect x="39" y="22" width="6" height="24" rx="2" fill="url(#ts_g)" />
      </g>

      <path
        d="M18 36c8-2 12-6 18-14 4-5 10-8 16-9"
        stroke="url(#ts_g)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M52.2 13.2l-1.2 7.1-6.2-3.8"
        fill="none"
        stroke="url(#ts_g)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const drawerRef = useRef(null);

  const menu = useMemo(
    () => [
      { name: "Login", path: "/login", icon: <FaUser /> },
      { name: "Tokens", path: "/tokens", icon: <FaWallet /> },
      { name: "Profile", path: "/profile", icon: <FaUserCircle /> },
      { name: "Funds", path: "/rms", icon: <FaMoneyBillWave /> },
    ],
    []
  );

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close on outside click
  useEffect(() => {
    const onDown = (e) => {
      if (!open) return;
      if (drawerRef.current && !drawerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const pillBase =
    "relative flex items-center gap-2 px-4 py-2 rounded-full text-sm transition will-change-transform";
  const activePill =
    "text-sky-300 bg-slate-950/60 shadow-[0_0_0_1px_rgba(56,189,248,0.25)]";
  const idlePill = "text-slate-300 hover:text-white hover:bg-slate-950/40";

  return (
    <header className="relative z-40">
      {/* MAIN BAR */}
      <nav className="w-full bg-[#0b1220]/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between gap-3">
            {/* BRAND */}
            <Link to="/login" className="flex items-center gap-3 min-w-[180px]">
              <span className="relative">
                <TradeSmartLogo size={28} />
                <span className="absolute -inset-3 -z-10 rounded-full bg-sky-400/10 blur-xl" />
              </span>

              <span className="flex flex-col leading-[1]">
                <span className="text-slate-100 font-extrabold tracking-wide">
                  TradeSmart
                </span>
                <span className="text-[11px] font-medium text-slate-400 tracking-[0.18em]">
                  SMART TERMINAL
                </span>
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="relative flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/40 p-1">
                {/* Moving glow pill */}
                <span
                  className="pointer-events-none absolute inset-y-1 rounded-full bg-sky-400/10 blur-md transition-all duration-300"
                  style={{
                    width: "0px",
                    transform: "translateX(0px)",
                  }}
                />
                {menu.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `${pillBase} ${isActive ? activePill : idlePill}`
                    }
                  >
                    <span className="text-[13px] opacity-90">{item.icon}</span>
                    <span className="font-semibold">{item.name}</span>

                    {/* Active underline */}
                    <span
                      className={`absolute left-4 right-4 -bottom-[6px] h-[2px] rounded-full bg-sky-400 transition-all ${
                        pathname === item.path ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </NavLink>
                ))}
              </div>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center justify-end gap-3 min-w-[180px]">
              <NavLink
                to="/logout"
                className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-xl
                           text-sm text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition"
              >
                <FaSignOutAlt />
                <span className="font-semibold">Logout</span>
              </NavLink>

              {/* Mobile toggle */}
              <button
                onClick={() => setOpen((p) => !p)}
                className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl
                           border border-slate-800 bg-slate-900/40 text-slate-200
                           hover:bg-slate-900/70 hover:border-sky-400/25 transition"
                aria-label="Toggle menu"
              >
                <span className="text-xl">{open ? "✕" : "☰"}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE BACKDROP */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(0,0,0,0.45)" }}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`md:hidden fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div ref={drawerRef} className="bg-[#0f172a] border-b border-slate-800 shadow-2xl">
          <div className="px-4 pt-4 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <TradeSmartLogo size={26} />
              <div className="leading-[1]">
                <div className="text-slate-100 font-bold">TradeSmart</div>
                <div className="text-[11px] text-slate-400 tracking-[0.18em]">
                  MENU
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="h-10 w-10 rounded-xl border border-slate-800 bg-slate-900/40
                         text-slate-200 hover:bg-slate-900/70 transition"
              aria-label="Close menu"
            >
              <span className="text-xl">✕</span>
            </button>
          </div>

          <div className="px-4 pb-4 space-y-2">
            {menu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between gap-3 px-4 py-3 rounded-2xl border
                  transition ${
                    isActive
                      ? "bg-slate-900/70 border-sky-400/20 text-sky-300"
                      : "bg-slate-900/30 border-slate-800 text-slate-200 hover:bg-slate-900/60 hover:border-sky-400/20"
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <span className="text-[14px] opacity-90">{item.icon}</span>
                  <span className="font-semibold">{item.name}</span>
                </div>
                <span className="text-xs text-slate-500">→</span>
              </NavLink>
            ))}

            <NavLink
              to="/logout"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl border
                         bg-rose-500/5 border-rose-500/20 text-rose-300 hover:bg-rose-500/10 transition"
            >
              <div className="flex items-center gap-3">
                <FaSignOutAlt />
                <span className="font-semibold">Logout</span>
              </div>
              <span className="text-xs text-rose-400">↗</span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
