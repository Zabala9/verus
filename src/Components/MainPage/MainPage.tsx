import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../Types/Products';
import './MainPage.css';

function MainPage() {
    const [groupedProducts, setGroupedProducts] = useState<Record<string, Product[]>[]>([]);
    const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
    const [loadCount, setLoadCount] = useState(0);
    const chunkSize = 6;

    // fetching products.json
    useEffect(() => {
        fetch('/products.json')
            .then((res) => res.json())
            .then((data) => {
                setGroupedProducts(data);

                // first flatten for display
                const initialList = data.flatMap((group: Record<string, Product[]>) => {
                    const brand = Object.keys(group)[0];
                    return group[brand].map(product => ({
                    ...product,
                    brand, // add brand as a new field
                    }));
                });

                setVisibleProducts(initialList.slice(0, chunkSize));
                setLoadCount(chunkSize);
            })
            .catch(err => console.error('Error loading products: ', err));
    }, []);

    // loading more products when scrolling down
    useEffect(() => {
        const handleScroll = () => {
            const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

            if (scrolledToBottom) {
                const allProducts = groupedProducts.flatMap(group => {
                    const brand = Object.keys(group)[0];
                    return group[brand];
                });

                if (loadCount < allProducts.length) {
                    const moreItems = allProducts.slice(loadCount, loadCount + chunkSize);
                    setVisibleProducts(prev => [...prev, ...moreItems]);
                    setLoadCount(prev => prev + chunkSize);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadCount, groupedProducts]);

    console.log(visibleProducts, 'here');

    return (
        <div className='container-main-page'>
            <label id='label-introduction'>Descubre nuestra ultima colección</label>
            <Link to='/relojesz&l' id='button-explorar'>EXPLORAR AHORA</Link>
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
        </div>
    )
};

export default MainPage;


{/* <img src='https://relojes-s-l.s3.us-west-1.amazonaws.com/Richard+mille.JPG' alt='' ></img>
                <img src='https://relojes-s-l.s3.us-west-1.amazonaws.com/Rolex+submarine+4.JPG' alt=''></img>
                <img src='https://relojes-s-l.s3.us-west-1.amazonaws.com/Rolex+daytona.JPG' alt=''></img>
                <img src='https://relojes-s-l.s3.us-west-1.amazonaws.com/Casio+EDIFICE+5.JPG' alt='' ></img>
                <img src='https://relojes-s-l.s3.us-west-1.amazonaws.com/Casio+EDIFICE+5.JPG' alt='' ></img>
                <img src='https://relojes-s-l.s3.us-west-1.amazonaws.com/Casio+EDIFICE+5.JPG' alt='' ></img>
                <img src='https://relojes-s-l.s3.us-west-1.amazonaws.com/Casio+EDIFICE+5.JPG' alt='' ></img>
                <img src='https://relojes-s-l.s3.us-west-1.amazonaws.com/Casio+EDIFICE+5.JPG' alt='' ></img>
                <img src='https://relojes-s-l.s3.us-west-1.amazonaws.com/Casio+EDIFICE+5.JPG' alt='' ></img>
                <img src='https://relojes-s-l.s3.us-west-1.amazonaws.com/Casio+EDIFICE+5.JPG' alt='' ></img>
                <img src='https://relojes-s-l.s3.us-west-1.amazonaws.com/Casio+EDIFICE+5.JPG' alt='' ></img>
                <img src='https://relojes-s-l.s3.us-west-1.amazonaws.com/Casio+EDIFICE+5.JPG' alt='' ></img> */}