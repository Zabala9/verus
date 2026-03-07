import React from "react";
import { Link } from "react-router-dom";
import { LastCollectionMayoristas } from "./LastCollectionMayoristas";
import './Mayoristas.css';

function Mayoristas(){
    const brands = Object.keys(LastCollectionMayoristas);

    return (
        <div className="container-mayoristas">
            {brands.map((brand) => {
                const firstProduct = LastCollectionMayoristas[brand][0]

                return (
                    <Link
                        key={brand}
                        to={`/verus-mayoristas/${brand}`}
                        id="brand-card"
                    >
                        <img src={firstProduct.imgUrl}
                            alt=""
                            id="brand-image"
                        >
                        </img>
                        <span id="brand-name">{brand}</span>
                    </Link>
                )
            })}
        </div>
    )
}

export default Mayoristas;