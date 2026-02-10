import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen relative bg-[#070b14] text-slate-100 flex items-center justify-center px-4 overflow-hidden">
      {/* ========= Animations ========= */}
      <style>{`
        @keyframes floaty { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes fadeUp { from{opacity:0; transform:translateY(18px)} to{opacity:1; transform:translateY(0)} }
        .fadeUp { animation: fadeUp .7s cubic-bezier(.2,.8,.2,1) both; }
      `}</style>

      {/* ========= Background Glow ========= */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/15 via-indigo-500/10 to-[#070b14]" />

        <div
          className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-sky-500/35 blur-3xl opacity-90"
          style={{ animation: "floaty 7s ease-in-out infinite" }}
        />
        <div
          className="absolute top-20 -right-48 h-[620px] w-[620px] rounded-full bg-indigo-500/30 blur-3xl opacity-80"
          style={{ animation: "floaty 8.5s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-52 left-1/3 h-[580px] w-[580px] rounded-full bg-emerald-500/20 blur-3xl opacity-80"
          style={{ animation: "floaty 9.5s ease-in-out infinite" }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.08]
                     bg-[linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),
                         linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)]
                     bg-[size:48px_48px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* ========= Card ========= */}
      <div
        className={`relative w-full max-w-md rounded-3xl border border-slate-800/80
                    bg-gradient-to-b from-slate-950/60 to-slate-900/30
                    shadow-[0_30px_90px_-45px_rgba(56,189,248,0.25)]
                    p-8 sm:p-10 text-center
                    ${mounted ? "fadeUp" : "opacity-0"}`}
      >
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl
                        bg-rose-500/10 border border-rose-500/25">
          <span className="text-3xl">🔒</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold tracking-tight text-slate-100">
          Logged Out Successfully
        </h2>

        <p className="mt-3 text-sm text-slate-400 leading-relaxed">
          Your session has ended safely.  
          Please login again to continue trading securely.
        </p>

        {/* Divider */}
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/login")}
            className="group rounded-xl bg-sky-500/90 px-6 py-3 font-semibold text-slate-950
                       transition duration-300
                       hover:bg-sky-400 hover:-translate-y-[2px]
                       active:scale-[0.98]"
          >
            Go to Login
          </button>

          <button
            onClick={() => navigate("/")}
            className="group rounded-xl border border-slate-800 bg-slate-950/40 px-6 py-3
                       text-slate-200 text-sm
                       transition duration-300
                       hover:border-sky-400/30 hover:bg-slate-950/60 hover:-translate-y-[2px]"
          >
            Back to Home
          </button>
        </div>

        {/* Footer text */}
        <p className="mt-6 text-xs text-slate-500">
          TradeSmart • Secure Session Handling
        </p>
      </div>
    </div>
  );
};

export default Logout;
