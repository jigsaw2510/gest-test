// RouterComponent.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';     // Make sure the path is correct
import Contact from './Contact'; // Make sure the path is correct
import App from './App';         // Make sure the path is correct
import Navigation from './Navigation';


const RouterComponent = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
