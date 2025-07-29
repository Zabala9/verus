import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import MainPage from './Components/MainPage/MainPage';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<MainPage />} />
        {/* <Route path='/relojes' element={ relojes aqui } /> */}
        {/* <Route path='/ropaz' element={ ropa aqui } /> */}
        <Route path='/contacto' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
