import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import MainPage from './Components/MainPage/MainPage';
import Relojes from './Components/Relojes/Relojes';
import Contact from './Components/Contact/Contact';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Ropa from './Components/Ropa/Ropa';
import NotFound from './Components/NotFound/NotFound';

function App() {
  const RouterComponent = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;

  return (
    <RouterComponent>
      <Navbar></Navbar>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/relojes' element={<Relojes /> } />
        <Route path='/ropa' element={ <Ropa /> } />
        <Route path='/contacto' element={<Contact/>} />
        <Route path='/relojes/:id' element={<ProductDetail />} />
      </Routes>
    </RouterComponent>
  );
}

export default App;