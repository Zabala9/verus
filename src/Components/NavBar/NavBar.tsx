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
          <img id='logo-navbar' src={`/Assets/logo-v-blanco.png`} alt=''></img>
          <span id='label-verus-navbar'>VERUS</span>
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