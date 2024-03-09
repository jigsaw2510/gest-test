// RouterComponent.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './About';     // Make sure the path is correct
import Contact from './Contact'; // Make sure the path is correct
import App from './App';         // Make sure the path is correct
import Navigation from './Navigation';


const RouterComponent = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/App" />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
