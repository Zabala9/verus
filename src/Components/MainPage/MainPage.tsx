import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../Types/Products';
import { LastCollection } from '../../Types/LastCollection';
import './MainPage.css';

function MainPage() {
    const chunkSize = 6;
    const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
    const [loadCount, setLoadCount] = useState<number>(chunkSize);

    useEffect(() => {
        setVisibleProducts(LastCollection.slice(0, chunkSize));
    }, [])

    // loading more products when scrolling down
    useEffect(() => {
        const handleScroll = () => {
            const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

            if (scrolledToBottom && loadCount < LastCollection.length) {
                const nextProducts = LastCollection.slice(loadCount, loadCount + chunkSize);
                setVisibleProducts(prev => [...prev, ...nextProducts]);
                setLoadCount(prev => prev + chunkSize);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadCount]);

    return (
        <div className='container-main-page'>
            <label id='label-introduction'>Descubre nuestra ultima colección</label>
            <Link to='/relojes' id='button-explorar'>EXPLORAR AHORA</Link>
            {/* en el futuro cambiar link para catalogo (ver todo) */}

            <div className='container-imagenes-main-page'>
                {visibleProducts.map((product, index) => (
                    <div key={`${product.id}-${index}`} className='product-card'>
                        <img id='img-product-card' src={product.imgUrl} alt={product.name}></img>
                        <label id='product-name-main'>{product.name}</label>
                        {/* <p>{product.color}</p>
                        <p>{product.description}</p>
                        <p>{product.price}</p> */}
                    </div>
                ))}
            </div>

            <Link to='/relojes' id='button-ver-mas'>VER MAS</Link>
        </div>
    )
};

export default MainPage;