import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// imports all components necessary

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        {/* <Route path='/' element={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
