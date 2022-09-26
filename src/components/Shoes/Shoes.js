import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shoes.css"

const Shoes = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>this is OrderSummary</h1>
            </div>
        </div>
    );
};

export default Shoes;