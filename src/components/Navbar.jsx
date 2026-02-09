import React, { useState, useMemo, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaUser,
  FaWallet,
  FaUserCircle,
  FaMoneyBillWave,
  FaSignOutAlt,
} from "react-icons/fa";

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
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-[38px] z-[80] w-full">
      {/* FULL WIDTH BAR */}
      <nav className="w-full bg-[#0b1220]/85 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">

            {/* Logo */}
            <Link to="/login" className="text-white font-bold text-lg">
              TradeSmart
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              {menu.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm transition ${
                      isActive
                        ? "bg-sky-500/20 text-sky-300"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
              <NavLink
                to="/logout"
                className="hidden md:flex items-center gap-2 text-rose-400 hover:text-rose-300"
              >
                <FaSignOutAlt /> Logout
              </NavLink>

              <button
                className="md:hidden text-white text-xl"
                onClick={() => setOpen(!open)}
              >
                {open ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div
          ref={drawerRef}
          className="md:hidden absolute top-16 inset-x-0 bg-[#0f172a] border-b border-slate-800"
        >
          <div className="p-4 space-y-2">
            {menu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-slate-200 hover:bg-white/5"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
