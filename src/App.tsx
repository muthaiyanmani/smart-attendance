import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import AddNewClass from "./pages/admission/CreateClass";
import AddNewStudent from "./pages/admission/AddStudent";
import Admissions from "./pages/admission";
import ClassStudentsList from "./pages/admission/StudentList";
import Classroom from "./pages/classroom";

import Dashboard from "./pages/dashboard";

import Reports from "./pages/reports";

import SignIn from "./pages/sign-in";
import EditStudent from "./pages/admission/EditStudent";
import ViewStudent from "./pages/admission/ViewStudent";
import AttendanceForm from "./pages/classroom/AttendaceForm";
import { RequireAuth } from "./utils/privateRoute";

function App() {
  return (
    <Routes>
      {/* Sign in */}
      <Route path="/" element={<SignIn />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />

      {/* Classroom Tab */}
      <Route
        path="/dashboard/classroom"
        element={
          <RequireAuth>
            <Classroom />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/classroom/:classId"
        element={
          <RequireAuth>
            <AttendanceForm />
          </RequireAuth>
        }
      />

      {/* Admissions Tab */}
      <Route
        path="/dashboard/admissions"
        element={
          <RequireAuth>
            <Admissions />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/admissions/:classId"
        element={
          <RequireAuth>
            <ClassStudentsList />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/admissions/:classId/new"
        element={
          <RequireAuth>
            <AddNewStudent />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/admissions/:classId/edit/:studentId"
        element={
          <RequireAuth>
            <EditStudent />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/admissions/:classId/view/:studentId"
        element={
          <RequireAuth>
            <ViewStudent />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/admissions/new"
        element={
          <RequireAuth>
            <AddNewClass />
          </RequireAuth>
        }
      />

      {/* Reports */}
      <Route
        path="/dashboard/reports"
        element={
          <RequireAuth>
            <Reports />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/reports/:classId"
        element={
          <RequireAuth>
            <Reports />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
