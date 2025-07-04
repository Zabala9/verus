import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const buttonInicio = () => {

};

function Navbar() {
  return (
    <div className='nav-bar'>
      {/* <span id='label-test'>test</span> */}
      <div className='container-name'>
        <Link to='/' id='label-name'>VERUS Z&L</Link>
      </div>
      <div className='container-opciones'>
        {/* <Link to='/' id='label-inicio'>INICIO</Link> */}
        <Link to='/relojes' id='label-relojes'>RELOJES</Link>
        <Link to='/ropa' id='label-ropa'>ROPA</Link>
        <Link to='/contacto' id='label-contacto'>CONTACTO</Link>
      </div>
    </div>
  );
}

export default Navbar;