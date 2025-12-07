import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../Types/Products';
import { LastCollection } from '../../Types/LastCollection';
import Advertising from '../Advertising/Advertising';
import './MainPage.css';

function MainPage() {
    // const chunkSize = 6;
    const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
    const [isReadyToScroll, setIsReadyToScroll] = useState(false);
    const [showAdvertising, setShowAdvertising] = useState(false);
    // const [loadCount, setLoadCount] = useState<number>(chunkSize);

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

    // // loading more products when scrolling down
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

    //         if (scrolledToBottom && loadCount < LastCollection.length) {
    //             const nextProducts = LastCollection.slice(loadCount, loadCount + chunkSize);
    //             setVisibleProducts(prev => [...prev, ...nextProducts]);
    //             setLoadCount(prev => prev + chunkSize);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [loadCount]);

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

            <label id='label-introduction'>Descubre nuestra ultima colección</label>
            <Link to='/relojes' id='button-explorar'>EXPLORAR AHORA</Link>
            {/* en el futuro cambiar link para catalogo (ver todo) */}

            <div className='container-imagenes-main-page'>
                {visibleProducts.map((product, index) => (
                    <Link to={`/relojes/${product.id}`}
                        state={product}
                        onClick={() => sessionStorage.setItem('scrollPosMain', window.scrollY.toString())}
                    >
                        <div key={`${product.id}-${index}`} className='product-card'>
                            <img id='img-product-card' src={product.imgUrl} alt={product.name}></img>
                            <label id='product-name-main'>{product.name}</label>
                            {/* <p>{product.color}</p>
                            <p>{product.description}</p>
                            <p>{product.price}</p> */}
                        </div>
                    </Link>
                ))}
            </div>

            <Link to='/relojes' id='button-ver-mas'>VER MAS</Link>
        </div>
    )
};

export default MainPage;