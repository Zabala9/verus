import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import MainPage from './Components/MainPage/MainPage';
import Mayoristas from './Components/Mayoristas/Mayoristas';
import MayoristasBrand from './Components/Mayoristas/MayoristasBrand';
import Relojes from './Components/Relojes/Relojes';
import Contact from './Components/Contact/Contact';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import RopaMain from './Components/Ropa/RopaMain';
import RopaPage from './Components/Ropa/RopaPage';
import ZapatosPage from './Components/Ropa/ZapatosPage';
import NotFound from './Components/NotFound/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/relojes' element={<Relojes /> } />
        <Route path='/ropa' element={ <RopaMain /> } />
        <Route path='/ropaverus' element={ <RopaPage /> } />
        <Route path='/zapatosverus' element={ <ZapatosPage />} />
        <Route path='/contacto' element={<Contact/>} />
        <Route path='/relojes/:id' element={<ProductDetail />} />
        <Route path='/zapatosverus/:id' element={<ProductDetail />} />
        <Route path='/ropaverus/:id' element={<ProductDetail />} />
        <Route path='/verus-mayoristas' element={<Mayoristas />} />
        <Route path='/verus-mayoristas/:brand' element={<MayoristasBrand />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;