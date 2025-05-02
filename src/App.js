import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Contact from './contact/contact';
import Gallery from './gallery/gallery';
import Services from './services/services';
import Home from './home/home';
import './App.css'; 


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;