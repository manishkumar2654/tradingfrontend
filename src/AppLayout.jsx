import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Ticker from "./components/Ticker";

const TICKER_H = 38; // h-[38px]
const NAV_H = 64;    // h-16

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b1220]">
      <Ticker />
      <Navbar topOffset={TICKER_H} />

      {/* total push = ticker + navbar */}
      <main className="flex-1 pt-[0px]">{children}</main>

      <Footer />
    </div>
  );
};

export default AppLayout;
