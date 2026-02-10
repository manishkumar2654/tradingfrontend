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
  // ✅ single list (we will render 2 copies in DOM)
  const items = useMemo(() => TICKER, []);

  const Row = ({ ariaHidden = false }) => (
    <div className="ticker-row" aria-hidden={ariaHidden}>
      {items.map((t, i) => (
        <span key={i} className="ticker-item">
          <span className="ico">{t.icon}</span>
          <b>{t.name}</b>
          <span className="price">{t.price}</span>
          <span className={t.chg.startsWith("+") ? "pos" : "neg"}>{t.chg}</span>
        </span>
      ))}
    </div>
  );

  return (
<section className="fixed top-0 left-0 right-0 z-[90] bg-[#0b1220]">
      <div className="ticker-shell h-[38px] overflow-hidden border-y border-slate-800">
        <div className="ticker-marquee">
          <Row />
          <Row ariaHidden />
        </div>
      </div>

      <style>{`
        .ticker-shell{
          width: 100%;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }

        /* ✅ iOS safe marquee */
        .ticker-marquee{
          display: flex;
          align-items: center;
          height: 100%;
          width: max-content;
          will-change: transform;
          transform: translate3d(0,0,0);
          animation: tickerMove 16s linear infinite;
        }

        .ticker-row{
          display: inline-flex;
          align-items: center;
          gap: 24px;
          padding-left: 16px;
          padding-right: 16px;
          flex-shrink: 0;            /* ✅ IMPORTANT for iOS */
          white-space: nowrap;
        }

        .ticker-item{
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          white-space: nowrap;
          color: #cbd5f5;
          opacity: .95;
        }

        .ticker-item b{ color:#fff; font-weight:600; }
        .ticker-item .price{ color: rgba(226,232,240,.8); }
        .ticker-item .ico{ font-size: 15px; line-height: 1; }

        .pos{ color:#22c55e; }
        .neg{ color:#ef4444; }

        /* ✅ move exactly one full row width by using 50% (two rows) */
        @keyframes tickerMove{
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-50%,0,0); }
        }

        /* iOS sometimes pauses on hover/touch - don't pause */
        @media (hover: hover){
          .ticker-marquee:hover { animation-play-state: paused; }
        }
        @media (hover: none){
          .ticker-marquee:hover { animation-play-state: running; }
        }

        @media (prefers-reduced-motion: reduce){
          .ticker-marquee{ animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Ticker;
