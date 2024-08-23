import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Features from './Components/Features';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';
import Homepage from './Components/Homepage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Offer" element={<Offer />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
