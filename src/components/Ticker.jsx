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
    <section className="sticky top-0 z-[90] bg-[#0b1220]">
      <div className="h-[38px] overflow-hidden border-y border-slate-800">
        <div className="ticker-track">
          {items.map((t, i) => (
            <span key={i} className="ticker-item">
              <span>{t.icon}</span>
              <b>{t.name}</b>
              <span>{t.price}</span>
              <span className={t.chg.startsWith("+") ? "pos" : "neg"}>
                {t.chg}
              </span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .ticker-track{
          display: inline-flex;
          align-items: center;
          gap: 24px;
          padding-left: 16px;
          width: max-content;
          animation: tickerMove 18s linear infinite;
        }

        .ticker-item{
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          white-space: nowrap;
          color: #cbd5f5;
        }

        .ticker-item b { color: #fff; font-weight: 600; }
        .pos { color: #22c55e; }
        .neg { color: #ef4444; }

        @keyframes tickerMove {
          from { transform: translateX(0); }
          to   { transform: translateX(-1000px); } /* 🔥 pixel based */
        }

        @media (prefers-reduced-motion: reduce){
          .ticker-track{ animation: none }
        }
      `}</style>
    </section>
  );
};

export default Ticker;
