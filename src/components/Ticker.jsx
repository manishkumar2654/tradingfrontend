import React, { useMemo } from "react";

const TICKER = [
  { icon: "💲", name: "USD", price: "$1", chg: "+0.07%" },
  { icon: "❌", name: "XRP", price: "$1.46", chg: "+11.97%" },
  { icon: "🟡", name: "BNB", price: "$649.82", chg: "+3.56%" },
  { icon: "🔵", name: "USDC", price: "$1", chg: "-0.00%" },
  { icon: "🟣", name: "SOL", price: "$87.5", chg: "+9.80%" },
  { icon: "🔻", name: "TRX", price: "$0.276", chg: "+2.33%" },
  { icon: "🐶", name: "DOGE", price: "$0.098", chg: "+7.30%" },
];

const Ticker = () => {
  const items = useMemo(() => [...TICKER, ...TICKER], []);

  return (
    <section className="fixed top-0 left-0 w-full z-[90] bg-[#0b1220] border-b border-slate-800">
      <div className="overflow-hidden h-[38px]">
        <div className="ticker-track flex items-center gap-10 px-6">
          {items.map((t, i) => {
            const isPos = t.chg.startsWith("+");
            return (
              <div
                key={i}
                className="flex items-center gap-2 text-[13px] whitespace-nowrap"
              >
                <span>{t.icon}</span>
                <span className="font-semibold text-slate-100">{t.name}</span>
                <span className="text-slate-300">{t.price}</span>
                <span className={isPos ? "text-green-400" : "text-red-400"}>
                  {t.chg}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .ticker-track {
          width: max-content;
          animation: ticker 16s linear infinite;
          transform: translate3d(0,0,0);
        }

        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-1200px); }
        }

        /* Mobile Safari fix */
        @supports (-webkit-touch-callout: none) {
          .ticker-track {
            animation-duration: 18s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Ticker;
