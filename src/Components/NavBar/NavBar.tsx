import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
  return (
    <div className='nav-bar'>
      {/* <span id='label-test'>test</span> */}
      <div className='container-name'>
        <Link to='/' id='label-name'
            // onClick={() => sessionStorage.removeItem('selectedBrands')}
        >
          VERUS
        </Link>
      </div>
      <div className='container-opciones'>
        {/* <Link to='/' id='label-inicio'>INICIO</Link> */}
        <Link to='/relojes' id='label-relojes'>RELOJES</Link>
        <Link to='/ropa' id='label-ropa'
            onClick={() => sessionStorage.removeItem('selectedBrands')}
        >
          ROPA
        </Link>
        <Link to='/contacto' id='label-contacto'>CONTACTO</Link>
      </div>
    </div>
  );
}

export default Navbar;