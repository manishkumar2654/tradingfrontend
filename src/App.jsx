import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./AppLayout";

import UserLogin from "./pages/UserLogin";
import TokenInfo from "./pages/TokenInfo";
import Profile from "./pages/Profile";
import RMS from "./pages/RMS";
import Logout from "./pages/Logout";

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/tokens" element={<TokenInfo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rms" element={<RMS />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
