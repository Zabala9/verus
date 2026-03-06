import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Product } from '../../Types/Products';
// import { LastCollection } from '../../Types/LastCollection';
import Advertising from '../Advertising/Advertising';
import MayoristasSlider from '../Mayoristas/MayoristasSlider';
import './MainPage.css';

const bannerImages = [
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/Guess+cuadrado+2.JPG',
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/Rolex+submarine+1.JPG',
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/Cartier+correa+en+goma+3.JPG',
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/Casio+Ferrari+5-2.jpg',
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/Curren+9111+2.jpg',
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/Curren+8418+4.JPG',
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/Invicta+estrella+6.JPG',
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/orient+3.JPG',
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/Rolex+datejust+5.JPG',
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/Saint+3.JPG',
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/Rolex+Dweller+1.JPG',
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/Versace+1-1.JPG',
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/Technomarine+6.JPG',
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/Casio+Ferrari+1-2.jpg',
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/Curren+8440+1.jpg',
    'https://relojes-s-l.s3.us-west-1.amazonaws.com/G+force+rin+giratorio+1.JPG'
];

function MainPage() {
    // const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
    // const [isReadyToScroll, setIsReadyToScroll] = useState(false);
    const [showAdvertising, setShowAdvertising] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    // useEffect(() => {
    //     if (isReadyToScroll) {
    //         const savedScrollPos = sessionStorage.getItem('scrollPosMain');
    //         if (savedScrollPos) {
    //             window.scrollTo(0, parseInt(savedScrollPos));
    //             sessionStorage.removeItem('scrollPosMain');
    //         }
    //     }
    // }, [isReadyToScroll]);

    // useEffect(() => {
    //     setVisibleProducts(LastCollection);
    //     setIsReadyToScroll(true);
    // }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev ===bannerImages.length - 1 ? 0 : prev + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (showAdvertising) {
            const timer = setTimeout(() => {
                setShowAdvertising(false);
            }, 7000); // 3 segundos

            return () => clearTimeout(timer); // limpieza por si se desmonta antes
        }
    }, [showAdvertising]);

    return (
        <div className='container-main-page'>
            {
                showAdvertising &&
                    <div className='overlay-advertising'>
                        <div className='container-advertising'>
                            <button id="close-advertising" onClick={() => setShowAdvertising(false)}>X</button>
                            <Advertising  />
                        </div>
                    </div>
            }

            <MayoristasSlider />

            <div className='container-imagenes-main-page'>
                {/* {visibleProducts.map((product, index) => (
                    <Link to={`/relojes/${product.id}`}
                        state={product}
                        onClick={() => sessionStorage.setItem('scrollPosMain', window.scrollY.toString())}
                    >
                        <div key={`${product.id}-${index}`} className='product-card'>
                            <img id='img-product-card' src={product.imgUrl} alt={product.name}></img>
                            <label id='product-name-main'>{product.name}</label>
                        </div>
                    </Link>
                ))} */}
                <img src={bannerImages[currentSlide]}
                    alt=''
                    id='slider-image-main-page'
                >
                </img>
            </div>
            {/* <label id='label-introduction'>Descubre nuestra ultima colección</label> */}
            <Link to='/relojes' id='button-explorar'>PARA USO PERSONAL</Link>

            {/* <Link to='/relojes' id='button-ver-mas'>VER MAS</Link> */}
        </div>
    )
};

export default MainPage;