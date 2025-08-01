import React from "react";
import { Link } from "react-router-dom";
import './Ropa.css';

function Ropa() {
    return (
        <div className="container-ropa">
            <p id="label-proximamente">PROXIMAMENTE...</p>
            <Link to='/' id="button-go-back-main">VOLVER A LA PAGINA PRINCIPAL</Link>
        </div>
    )
};

export default Ropa;