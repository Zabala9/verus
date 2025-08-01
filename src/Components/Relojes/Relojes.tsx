import React, { useState, useEffect } from "react";
import { Product } from '../../Types/Products';
import './Relojes.css';

function Relojes() {
    const [groupedProducts, setGroupedProducts] = useState<Record<string, Product[]>[]>([]);
    const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
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

    useEffect(() => {
        const allProducts = groupedProducts.flatMap(group => {
            const brand = Object.keys(group)[0];
            return group[brand].map(product => ({
                ...product,
                brand
            }));
        });

        const filtered = selectedBrands.length === 0
            ? allProducts : allProducts.filter(product => selectedBrands.includes(product.brand));

        setVisibleProducts(filtered.slice(0, chunkSize));
        setLoadCount(chunkSize);
    }, [selectedBrands, groupedProducts]);

    // loading more products when scrolling down
    useEffect(() => {
        const handleScroll = () => {
            const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

            if (scrolledToBottom) {
                const allProducts = groupedProducts.flatMap(group => {
                    const brand = Object.keys(group)[0];
                    return group[brand].map(product => ({
                        ...product,
                        brand
                    }));
                });

                const filteredProducts = selectedBrands.length === 0
                    ? allProducts : allProducts.filter(product => selectedBrands.includes(product.brand));

                if (loadCount < filteredProducts.length) {
                    const moreItems = filteredProducts.slice(loadCount, loadCount + chunkSize);
                    setVisibleProducts(prev => [...prev, ...moreItems]);
                    setLoadCount(prev => prev + chunkSize);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadCount, groupedProducts, selectedBrands]);

    return (
        <div className="container-relojes-page">

            <div className="filter-container">
                <button onClick={() => setShowDropdown(prev => !prev)}>
                    Filtrar por marca
                </button>

                {showDropdown && (
                    <div className="dropdown-menu">
                        {groupedProducts.map((group, index) => {
                            const brandKeys = Object.keys(group);
                            if (brandKeys.length === 0) return null;

                            const brand = brandKeys[0];
                            const isChecked = selectedBrands.includes(brand);

                            return (
                                <label key={brand + index} className="dropdown-item">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={() => {
                                            setSelectedBrands(prev => 
                                                isChecked ? prev.filter(b => b !== brand) : [...prev, brand]
                                            );
                                        }}
                                    />
                                    {brand}
                                </label>
                            )
                        })}
                    </div>
                )}
            </div>
            
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