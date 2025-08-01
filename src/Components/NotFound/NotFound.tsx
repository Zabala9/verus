import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className='container-not-found'>
      <h1>Página no encontrada</h1>
      <Link id='button-back' to="/">Volver al inicio</Link>
    </div>
  );
}

export default NotFound;