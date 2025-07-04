import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import MainPage from './Components/MainPage/MainPage';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<MainPage />} />
        {/* <Route path='/relojesz&l' element={ relojes aqui } /> */}
        {/* <Route path='/ropaz&l' element={ ropa aqui } /> */}
        {/* <Route path='/contactoz&l' element={ contacto aqui } /> */}
      </Routes>
    </Router>
  );
}

export default App;
