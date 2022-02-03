import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddClass from "./components/admissions/addClass";
import AddNewClass from "./pages/admission/addNewClass";
import Admissions from "./pages/admission/admissions";

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
        <Route path="/dashboard/admissions/new" element={<AddNewClass />} />
        <Route path="/dashboard/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
