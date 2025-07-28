import React from "react";
import { HashRouter , Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Dashboard Page (after successful login) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Notfound Page (for any wrong route) */}
        <Route path="Notfound" element={<Notfound />} />
      </Routes>
      </HashRouter>
    
  );
}

export default App;