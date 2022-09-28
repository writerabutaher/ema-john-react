import React from 'react';
import "./Cart.css"

const Cart = ({ cart }) => {
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * .1).toFixed(2));

    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <b>Grand Total: ${total + shipping + tax}</b>

        </div>
    );
};

export default Cart;   