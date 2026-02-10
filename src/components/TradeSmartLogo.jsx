import React from "react";

const TradeSmartLogo = ({ size = 28 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
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

      {/* base badge */}
      <path
        d="M12 44c0 6.6 5.4 12 12 12h16c6.6 0 12-5.4 12-12V20c0-6.6-5.4-12-12-12H24c-6.6 0-12 5.4-12 12v24Z"
        fill="url(#ts_dark)"
        stroke="#1f2937"
        strokeOpacity="0.7"
      />

      {/* subtle inner grid line */}
      <path
        d="M18 40h28"
        stroke="#334155"
        strokeOpacity="0.45"
        strokeLinecap="round"
      />

      {/* bars */}
      <g filter="url(#ts_glow)">
        <rect x="19" y="34" width="6" height="12" rx="2" fill="url(#ts_g)" opacity="0.9" />
        <rect x="29" y="28" width="6" height="18" rx="2" fill="url(#ts_g)" opacity="0.95" />
        <rect x="39" y="22" width="6" height="24" rx="2" fill="url(#ts_g)" />
      </g>

      {/* arrow up */}
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

export default TradeSmartLogo;
