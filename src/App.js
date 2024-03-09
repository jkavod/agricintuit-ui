import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { About, Contact, FAQS, Home, Privacy, Terms } from "./Pages";
import { Kaji } from "./Pages/products";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<FAQS />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/kaji" element={<Kaji />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
