import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import AddNewClass from "./pages/admission/addClass";
import AddNewStudent from "./pages/admission/addStudent";
import Admissions from "./pages/admission";
import ClassStudentsList from "./pages/admission/list";
import Classroom from "./pages/classroom";

import StudentsList from "./pages/classroom/list";
import Dashboard from "./pages/dashboard";

import Reports from "./pages/reports";

import SignIn from "./pages/sign-in/signIn";
import EditStudent from "./pages/admission/editStudent";
import ViewStudent from "./pages/admission/viewStudent";
import AttendanceForm from "./pages/classroom/attendaceForm";

function App() {
  return (
    <Routes>
      {/* Sign in */}
      <Route path="/" element={<SignIn />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Classroom Tab */}
      <Route path="/dashboard/classroom" element={<Classroom />} />
      <Route
        path="/dashboard/classroom/:classId"
        element={<AttendanceForm />}
      />

      {/* Admissions Tab */}
      <Route path="/dashboard/admissions" element={<Admissions />} />
      <Route
        path="/dashboard/admissions/:classId"
        element={<ClassStudentsList />}
      />
      <Route
        path="/dashboard/admissions/:classId/new"
        element={<AddNewStudent />}
      />
      <Route
        path="/dashboard/admissions/:classId/edit/:studentId"
        element={<EditStudent />}
      />
      <Route
        path="/dashboard/admissions/:classId/view/:studentId"
        element={<ViewStudent />}
      />
      <Route path="/dashboard/admissions/new" element={<AddNewClass />} />

      {/* Reports */}
      <Route path="/dashboard/reports" element={<Reports />} />
      <Route path="/dashboard/reports/:classId" element={<Reports />} />
    </Routes>
  );
}

export default App;
