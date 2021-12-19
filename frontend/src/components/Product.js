import React from "react";

export default function Product(props){
    const {product} = props;
    return (
        <div key={product._id} className="card">
            <a href={`/product/${product._id}`}>
                <img className="gasnormal" src={product.image} alt={product.name} />
            </a>
            <div className="cardb">
                <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </a>
                <div className="price">
                    ${product.price}
                </div>
            </div>
        </div>
    )
}