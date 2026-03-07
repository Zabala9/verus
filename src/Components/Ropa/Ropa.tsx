import React from "react";
import { Link } from "react-router-dom";
import './Ropa.css';

function Ropa() {
    return (
        <div className="container-ropa">
            <span id="title-container-ropa">Air Force 1</span>
            <img id="image-container-ropa" src="https://relojes-s-l.s3.us-west-1.amazonaws.com/ROPA/Nike+AF1.jpeg" alt=""></img>

            <a id="link-to-whatsapp-product-detail" href="https://wa.me/573132679419/"
                target="_blank" rel="noopener noreferrer" >
                {/* <img id="logo-whatsapp" src={`${process.env.PUBLIC_URL}/Assets/logo-whatsapp.jpg`} alt="" ></img> */}

                <span id="label-quiero">LO QUIERO</span>
            </a>
        </div>
    )
};

export default Ropa;