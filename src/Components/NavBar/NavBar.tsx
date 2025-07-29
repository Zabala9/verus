import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
  return (
    <div className='nav-bar'>
      {/* <span id='label-test'>test</span> */}
      <div className='container-name'>
        <Link to='/' id='label-name'>VERUS</Link>
      </div>
      <div className='container-opciones'>
        {/* <Link to='/' id='label-inicio'>INICIO</Link> */}
        <Link to='/relojesz&l' id='label-relojes'>RELOJES</Link>
        <Link to='/ropaz&l' id='label-ropa'>ROPA</Link>
        <Link to='/contactoz&l' id='label-contacto'>CONTACTO</Link>
      </div>
    </div>
  );
}

export default Navbar;