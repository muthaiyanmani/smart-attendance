import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admissions from "./pages/admissions";
import Calender from "./pages/calender";
import Classroom from "./pages/classroom";
import Dashboard from "./pages/dashboard";

import Reports from "./pages/reports";

import SignIn from "./pages/signIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/classroom" element={<Classroom />} />
        <Route path="/dashboard/admissions" element={<Admissions />} />
        <Route path="/dashboard/calender" element={<Calender />} />
        <Route path="/dashboard/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
