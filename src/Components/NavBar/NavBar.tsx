import React from 'react';
import './NavBar.css';

function Navbar() {
  return (
    <div className='nav-bar'>
      {/* <span id='label-test'>test</span> */}
      <div className='container-name'>
        <span id='label-name'>VERUS Z&L</span>
      </div>
      <div className='container-opciones'>
        <span id='label-inicio'>INICIO</span>
        <span id='label-relojes'>RELOJES</span>
        <span id='label-ropa'>ROPA</span>
        <span id='label-contacto'>CONTACTO</span>
      </div>
    </div>
  );
}

export default Navbar;