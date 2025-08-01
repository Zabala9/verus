import React, { useState, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { Product } from "../../Types/Products";
import './ProductDetail.css';

function ProductDetail() {
    const location = useLocation();
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(location.state || null);    
    const [loading, setLoading] = useState(!location.state);

    useEffect(() => {
        if (!product) {
            // fetch para buscar el producto si viene directamente al link
            fetch('/verus/products.json')
                .then((res) => res.json())
                .then((data: Record<string, Product[]>[]) => {
                    const allProducts = data.flatMap(group => {
                        const brand = Object.keys(group)[0];
                        return group[brand].map(product => ({
                            ...product,
                            brand
                        }));
                    });

                    const found = allProducts.find(p => p.id === id);
                    setProduct(found ?? null);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Error loading the product: ', err);
                    setLoading(false);
                });
        }
    }, [id, product]);

    if (loading) return <p>Cargando producto...</p>
    if (!product) return (
        <div className="container-error-fetching-product">
            <p id="label-error-fetching-product">Hubo un error al tratar de encontrar el producto.</p>
            <Link to='/' id="button-go-back-main">VOLVER A LA PAGINA PRINCIPAL</Link>
        </div>
    )

    return (
        <div className="container-product-detail">
            <img id="img-product-detail" src={product.imgUrl} alt=""></img>
            <h2 id="label-name-product-detail">{product.name}</h2>
            <p id="label-description">{product.description}</p>
            <label id="label-color"><strong>Color:</strong> {product.color}</label>
            <label>{product.presentacion}</label>
            <p><strong>Precio: </strong> ${product.price.toLocaleString()}</p>
        </div>
    )
};

export default ProductDetail;