import React from "react";
import './Contact.css';

function Contact() {

    return (
        <div className="container-contact">
            <span id="label-canales">Nuestros canales oficiales: </span>

            <a id="link-to-instagram" href="https://www.instagram.com/verus.2802/"
                target="_blank" rel="noopener noreferrer" >
                <img id="logo-instagram" src='/Assets/logo-instagram.jpg' alt="" ></img>
                <span id="label-instragram">INSTAGRAM</span>
            </a>

            <a id="link-to-whatsapp" href="https://wa.me/573132679419/"
                target="_blank" rel="noopener noreferrer" >
                <img id="logo-whatsapp" src='/Assets/logo-whatsapp.jpg' alt="" ></img>
                <span id="label-whatsapp">WHATSAPP</span>
            </a>
        </div>
    )
};

export default Contact;