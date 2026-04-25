import React, { useEffect, useState } from "react";
import { bannerImagesZapatos } from "./ZapatosSlider";
import { bannerImagesRopa } from "./RopaSlider";
import './Ropa.css';
import { Link } from "react-router-dom";

function RopaMain() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev ===bannerImagesRopa.length - 1 ? 0 : prev+1
            );
        }, 2000);

        const interval2 = setInterval(() => {
            setCurrentSlide((prev) =>
                prev ===bannerImagesRopa.length - 1 ? 0 : prev+1
            );
        }, 2000);

        return () => {
            clearInterval(interval);
            clearInterval(interval2);
        }
    }, [])
    
    return (
        <div className="container-ropa-main">
            <div>
                <img src={bannerImagesZapatos[currentSlide]}
                    alt=""
                    id="slider-zapatos"
                >
                </img>
                <span id="label-contraentrega">CONTRAENTREGA a TODO EL PAIS</span>
                <Link id="link-to-zapatos-page" to="/zapatosverus"
                    rel="noopener noreferrer" >Zapatos
                </Link>
            </div>

            <div>
                <img src={bannerImagesRopa[currentSlide]}
                    alt=""
                    id="slider-ropa"
                >
                </img>
                <span id="label-contraentrega">CONTRAENTREGA a TODO EL PAIS</span>
                <Link id="link-to-ropa-page" to="/ropaverus"
                    rel="noopener noreferrer" >
                    Ropa
                </Link>
            </div>
            {/* <div>
                <span id="title-container-ropa">Air Force 1</span>
                <img id="image-container-ropa" src="https://relojes-s-l.s3.us-west-1.amazonaws.com/ROPA/Nike+AF1.jpeg" alt=""></img>

                <span id="label-contraentrega">CONTRAENTREGA a TODO EL PAIS</span>
                <a id="link-to-whatsapp-product-detail" href="https://wa.me/573132679419/"
                    target="_blank" rel="noopener noreferrer" >
                    <span id="label-quiero">LO QUIERO</span>
                </a>
            </div>
            <div>
                <span id="title-container-ropa">Air Force 1 x BAPE</span>
                <img id="image-container-ropa" src="https://relojes-s-l.s3.us-west-1.amazonaws.com/ROPA/Air+Force+1+x+Bape+azul.jpg" alt=""></img>

                <span id="label-contraentrega">CONTRAENTREGA a TODO EL PAIS</span>
                <a id="link-to-whatsapp-product-detail" href="https://wa.me/573132679419/"
                    target="_blank" rel="noopener noreferrer" >
                    
                    <span id="label-quiero">LO QUIERO</span>
                </a>
            </div>
            <div>
                <span id="title-container-ropa">Air Force 1 x BAPE</span>
                <img id="image-container-ropa" src="https://relojes-s-l.s3.us-west-1.amazonaws.com/ROPA/Air+Force+1+x+Bape+verde.jpg" alt=""></img>

                <span id="label-contraentrega">CONTRAENTREGA a TODO EL PAIS</span>
                <a id="link-to-whatsapp-product-detail" href="https://wa.me/573132679419/"
                    target="_blank" rel="noopener noreferrer" >
                    <span id="label-quiero">LO QUIERO</span>
                </a>
            </div> */}
        </div>
    )
};

export default RopaMain;