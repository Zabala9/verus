import React, { useState, useEffect } from "react";
import { Product } from '../../Types/Products';
import './Relojes.css';

function Relojes() {
    const [groupedProducts, setGroupedProducts] = useState<Record<string, Product[]>[]>([]);
    const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
    // const [showDropdown]
    // const [selectedBrand, setSelectedBrand] = useState<string>('Todos');
    const [loadCount, setLoadCount] = useState(0);
    const chunkSize = 10;

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

                const initialList = groupedProducts.flatMap((group: Record<string, Product[]>) => {
                    const brand = Object.keys(group)[0];
                    return group[brand].map(product => ({
                    ...product,
                    brand, // add brand as a new field
                    }));
                });

                if (loadCount < initialList.length) {
                    const moreItems = allProducts.slice(loadCount, loadCount + chunkSize);
                    setVisibleProducts(prev => [...prev, ...moreItems]);
                    setLoadCount(prev => prev + chunkSize);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadCount, groupedProducts]);

    return (
        <div className="container-relojes-page">

            {/* <div className="filter-container">
                <button onClick={() => setSelectedBrand('Todos')} >Todos</button>
                {groupedProducts.map((group, index) => {
                    const brandKeys = Object.keys(group);
                    if (brandKeys.length === 0) return null;

                    const brand = brandKeys[0];

                    return (
                        <button key={brand + index} onClick={() => setSelectedBrand(brand)} >
                            {brand}
                        </button>
                    )
                })}
            </div> */}
            
            <div className="container-imagenes-relojes-page">
                {visibleProducts.map((product, index) => (
                    <div key={`${product.id}-${index}`} className="product-card-relojes">
                        <img id="img-product-card-relojes" src={product.imgUrl} alt=""></img>
                        <label id="product-name-relojes">{product.name}</label>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Relojes;