import React, { useMemo } from "react";

const TICKER = [
  { icon: "💲", name: "USD", price: "$1", chg: "+0.07%" },
  { icon: "❌", name: "XRP", price: "$1.46", chg: "+11.97%" },
  { icon: "🟡", name: "BNB", price: "$649.82", chg: "+3.56%" },
  { icon: "🔵", name: "USDC", price: "$1", chg: "-0.00%" },
  { icon: "🟣", name: "SOL", price: "$87.5", chg: "+9.80%" },
  { icon: "🔻", name: "TRX", price: "$0.276", chg: "+2.33%" },
  { icon: "🐶", name: "DOGE", price: "$0.098", chg: "+7.30%" },
  { icon: "🟦", name: "FIGR_HELOC", price: "$1.028", chg: "-0.20%" },
];

const Ticker = () => {
  const items = useMemo(() => [...TICKER, ...TICKER], []);

  return (
    <section className="fixed top-0 left-0 right-0 z-[90]">
      <div className="w-full h-[38px] border-y border-slate-800 bg-[#0b1220] overflow-hidden">
        <div className="h-full flex items-center">
          <div className="ticker-track flex items-center gap-10 whitespace-nowrap px-6">
            {items.map((t, i) => {
              const isPos = t.chg.trim().startsWith("+");
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 text-[13px] opacity-90 hover:opacity-100 transition"
                >
                  <span className="text-base leading-none">{t.icon}</span>
                  <span className="font-semibold text-slate-100">{t.name}</span>
                  <span className="text-slate-200/80">{t.price}</span>
                  <span className={isPos ? "text-emerald-400" : "text-rose-400"}>
                    {t.chg}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* animation */}
      <style>{`
        .ticker-track{
          animation: tickerMove 14s linear infinite;
          will-change: transform;
        }
        .ticker-track:hover{ animation-play-state: paused; }
        @keyframes tickerMove{
          0%{ transform: translateX(0); }
          100%{ transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce){
          .ticker-track{ animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Ticker;
