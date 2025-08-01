import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import MainPage from './Components/MainPage/MainPage';
import Relojes from './Components/Relojes/Relojes';
import Contact from './Components/Contact/Contact';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Ropa from './Components/Ropa/Ropa';

function App() {
  return (
    <Router basename='/verus'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/relojes' element={<Relojes /> } />
        <Route path='/ropa' element={ <Ropa /> } />
        <Route path='/contacto' element={<Contact/>} />
        <Route path='/relojes/:id' element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;