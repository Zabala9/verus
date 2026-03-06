import React, { useEffect, useState } from "react";
import './MayoristasSlider.css';

const bannerImages = [
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/MAYORISTAS/casio+retro+2.JPG',
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/MAYORISTAS/mulco+4.JPG',
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/MAYORISTAS/orient+dama+8.JPG',
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/MAYORISTAS/Q%26Q+fondo+lineas+4.JPG'
];

function MayoristasSlider(){
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === bannerImages.length - 1 ? 0 : prev + 1
            );
        }, 2000); //change every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container-mayoristas-slider">
            <span id="label-mayoristas-slider">DESCUBRE NUESTROS ULTIMOS DROPS PARA EMPRENDEDORES</span>
            <img src={bannerImages[currentSlide]}
                alt=""
                id="slider-image"
            >
            </img>
        </div>
    )
}

export default MayoristasSlider;