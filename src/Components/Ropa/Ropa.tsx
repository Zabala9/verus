import React, {useState} from "react";
// import { Link, useLocation } from "react-router-dom";
// import { RopaLastCollection } from "../../Types/RopaLastCollection";
import './Ropa.css';

function Ropa() {
    // const location = useLocation();
    // const [loading, setLoading] = useState(location.state);

    // if (loading) return <p>Cargando productos...</p>
    
    return (
        <div className="container-ropa">
            <div>
                <span id="title-container-ropa">Air Force 1</span>
                <img id="image-container-ropa" src="https://relojes-s-l.s3.us-west-1.amazonaws.com/ROPA/Nike+AF1.jpeg" alt=""></img>

                <span id="label-contraentrega">CONTRAENTREGA a TODO EL PAIS</span>
                <a id="link-to-whatsapp-product-detail" href="https://wa.me/573132679419/"
                    target="_blank" rel="noopener noreferrer" >
                    {/* <img id="logo-whatsapp" src={`${process.env.PUBLIC_URL}/Assets/logo-whatsapp.jpg`} alt="" ></img> */}
                    <span id="label-quiero">LO QUIERO</span>
                </a>
            </div>
            <div>
                <span id="title-container-ropa">Air Force 1 x BAPE</span>
                <img id="image-container-ropa" src="https://relojes-s-l.s3.us-west-1.amazonaws.com/ROPA/Air+Force+1+x+Bape+azul.jpg" alt=""></img>

                <span id="label-contraentrega">CONTRAENTREGA a TODO EL PAIS</span>
                <a id="link-to-whatsapp-product-detail" href="https://wa.me/573132679419/"
                    target="_blank" rel="noopener noreferrer" >
                    {/* <img id="logo-whatsapp" src={`${process.env.PUBLIC_URL}/Assets/logo-whatsapp.jpg`} alt="" ></img> */}
                    <span id="label-quiero">LO QUIERO</span>
                </a>
            </div>
            <div>
                <span id="title-container-ropa">Air Force 1 x BAPE</span>
                <img id="image-container-ropa" src="https://relojes-s-l.s3.us-west-1.amazonaws.com/ROPA/Air+Force+1+x+Bape+verde.jpg" alt=""></img>

                <span id="label-contraentrega">CONTRAENTREGA a TODO EL PAIS</span>
                <a id="link-to-whatsapp-product-detail" href="https://wa.me/573132679419/"
                    target="_blank" rel="noopener noreferrer" >
                    {/* <img id="logo-whatsapp" src={`${process.env.PUBLIC_URL}/Assets/logo-whatsapp.jpg`} alt="" ></img> */}
                    <span id="label-quiero">LO QUIERO</span>
                </a>
            </div>
        </div>
    )
};

export default Ropa;