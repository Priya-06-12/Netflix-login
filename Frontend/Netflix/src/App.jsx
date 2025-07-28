import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Dashboard Page (after successful login) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Notfound Page (for any wrong route) */}
        <Route path="Notfound" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;