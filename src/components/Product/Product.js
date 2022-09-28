import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"

const Product = (props) => {
    // console.log(props.handleAddToCart);
    const { handleAddToCart, product } = props
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <div className='products-info'>
                <img src={img} alt="" />
                <h3 className='product-name'>{name}</h3>
                <h3 className='product-info'>Price: ${price}</h3>
                <p className='product-info'>Manufacturer: {seller}</p>
                <p className='product-info'>Rating: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;