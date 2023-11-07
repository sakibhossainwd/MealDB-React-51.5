// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div className='cart-container'>
            <h3>Total Food Items: {props.cart.length}</h3>
        </div>
    );
};

export default Cart;