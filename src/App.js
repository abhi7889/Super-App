import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/register/Register";
import Genre from "./components/Genre/Genre";
import HomePage from "./components/Homepage/HomePage";
import Movies from "./components/Movies/Movies";

export default function App() {
  const signUp = (userData) => {
    console.log("Signing up:", userData);
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Register signUp={signUp} />} />
          <Route path="Genre" element={<Genre />} />
          <Route path="HomePage" element={<HomePage />} />
          <Route path="Movies" element={<Movies />} />
        </Routes>
      </Router>
    </div>
  );
}
