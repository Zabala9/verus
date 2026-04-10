import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { LastCollectionMayoristas } from "./LastCollectionMayoristas";
import './MayoristasBrand.css';
import NotFound from "../NotFound/NotFound";

function MayoristasBrand() {
    const { brand } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if (!brand || !LastCollectionMayoristas[brand]){
        return <NotFound></NotFound>
    }

    const products = LastCollectionMayoristas[brand];

    return (
        <div className="container-brand-products-mayoristas">
            {/* <span id="label-mayoristas-brand">{brand}</span> */}

            <div className="products-grid-mayoristas">
                {products.map((product) => (
                    <div className="product-card-mayorista">
                        <img src={product.imgUrl} alt="" id="img-product-card-mayorista"></img>
                        <span id="name-product-card-mayorista">{product.name}</span>
                        {product.presentacion && <span id="presentacion-product-card-mayorista">{product.presentacion}</span>}
                        {product.notes && <span id="notes-product-card-mayorista">Nota: {product.notes}</span>}
                        <a id="link-to-whatsapp-mayoristas-brand" href="https://wa.me/573132679419/"
                            target="_blank" rel="noopener noreferrer" >
                            <img id="logo-whatsapp-mayoristas-brand" src={`/Assets/logo-whatsapp.png`} alt="" ></img>
                            <span id="label-whatsapp-mayoristas-brand">WHATSAPP</span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MayoristasBrand;