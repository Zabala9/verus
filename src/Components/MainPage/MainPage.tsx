import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../Types/Products';
import { LastCollection } from '../../Types/LastCollection';
import Advertising from '../Advertising/Advertising';
import MayoristasSlider from '../Mayoristas/MayoristasSlider';
import './MainPage.css';

function MainPage() {
    const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
    const [isReadyToScroll, setIsReadyToScroll] = useState(false);
    const [showAdvertising, setShowAdvertising] = useState(false);

    useEffect(() => {
        if (isReadyToScroll) {
            const savedScrollPos = sessionStorage.getItem('scrollPosMain');
            if (savedScrollPos) {
                window.scrollTo(0, parseInt(savedScrollPos));
                sessionStorage.removeItem('scrollPosMain');
            }
        }
    }, [isReadyToScroll]);

    useEffect(() => {
        setVisibleProducts(LastCollection);
        setIsReadyToScroll(true);
    }, [])

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

            <label id='label-introduction'>Descubre nuestra ultima colección</label>
            <Link to='/relojes' id='button-explorar'>EXPLORAR AHORA</Link>

            <div className='container-imagenes-main-page'>
                {visibleProducts.map((product, index) => (
                    <Link to={`/relojes/${product.id}`}
                        state={product}
                        onClick={() => sessionStorage.setItem('scrollPosMain', window.scrollY.toString())}
                    >
                        <div key={`${product.id}-${index}`} className='product-card'>
                            <img id='img-product-card' src={product.imgUrl} alt={product.name}></img>
                            <label id='product-name-main'>{product.name}</label>
                        </div>
                    </Link>
                ))}
            </div>

            <Link to='/relojes' id='button-ver-mas'>VER MAS</Link>
        </div>
    )
};

export default MainPage;