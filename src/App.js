import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Contact, FAQS, Home, Privacy, Terms } from "./Pages";
import { Kaji } from "./Pages/products";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/faqs" element={<FAQS />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/kaji" element={<Kaji />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
