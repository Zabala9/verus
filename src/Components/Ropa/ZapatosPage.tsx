import React, { useEffect, useState } from "react";
import { Product } from "../../Types/Products";
import { Link } from "react-router-dom";
import './ZapatosPage.css';

function ZapatosPage() {
    const [groupedProducts, setGroupedProducts] = useState<Record<string, Product[]>[]>([]);
    const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [isReadyToScroll, setIsReadyToScroll] = useState(false);

    // reiniciando posicion de la pagina al comienzo
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ajustando la posicion donde quedo la pagina
    // useEffect(() => {
    //     if(isReadyToScroll) {
    //         const savedScrollPos = sessionStorage.getItem('scrollPos');
    //         if(savedScrollPos) {
    //             window.scrollTo(0, parseInt(savedScrollPos));
    //             sessionStorage.removeItem('scrollPos');
    //         }

    //         const savedBrands = sessionStorage.getItem('selectedBrands');
    //         if (savedBrands) {
    //             try {
    //                 setSelectedBrands(JSON.parse(savedBrands));
    //             } catch (err) {
    //                 console.error('Error al filtrar las marcas: ', err);
    //             }
    //         }
    //     }
    // }, [isReadyToScroll]);

    // fetching zapatos products (zapatosProducts.json)
    useEffect(() => {
        fetch('/zapatosProducts.json')
            .then((res) => res.json())
            .then((data) => {
                setGroupedProducts(data);

                // first flatten for display
                const initialList = data.flatMap((group: Record<string, Product[]>) => {
                    const brand = Object.keys(group)[0];
                    return group[brand].map(product => ({
                        ...product,
                        brand, // add brand as new field
                    }));
                });

                setVisibleProducts(initialList);
                setIsReadyToScroll(true);
            })
            .catch(err => console.error('Error loading products: ', err));
    }, []);

    // filtrando por marca
    useEffect(() => {
        const allProducts = groupedProducts.flatMap(group => {
            const brand = Object.keys(group)[0];
            return group[brand].map(product => ({
                ...product,
                brand
            }));
        })

        const filtered = selectedBrands.length === 0
            ? allProducts : allProducts.filter(product => selectedBrands.includes(product.brand));
        setVisibleProducts(filtered);
    }, [selectedBrands, groupedProducts])

    return (
        <div className="container-zapatos-page">
            <div className="filter-container">
                <button id="button-filtrar-por-marca" onClick={() => setShowDropdown(prev => !prev)}>
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
                                <label id="label-brands-filter" key={brand+index} className="dropdown-item">
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

            <div className="container-imagenes-zapatos-page">
                {visibleProducts.map((product, index) => (
                    <Link to={`/zapatosverus/${product.id}`}
                        state={product}
                        onClick={() => {
                            sessionStorage.setItem('scrollPos', window.scrollY.toString());
                            sessionStorage.setItem('selectedBrands', JSON.stringify(selectedBrands));
                        }}
                    >
                        <div key={`${product.id}-${index}`} className="product-card-ropa-page">
                            <img id="img-product-card-zapatos-page" src={product.imgUrl} alt=""></img>
                            <span id="product-name-zapatos-page">{product.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default ZapatosPage;