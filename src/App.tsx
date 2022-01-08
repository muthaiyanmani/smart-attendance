import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Comments from "./pages/comments";
import ResetPassword from "./pages/showPassword";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Comments/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/reset" element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
