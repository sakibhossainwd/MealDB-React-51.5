// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(props.cart.strMeal)
    // let quantity = 0;
    let mealName = '';
    for(const meal of cart){
        // meal.quantity = meal.quantity || 1;
        mealName = meal.strMeal
    }

    return (
        <div className='cart-container'>
            <h3>Total Food Items: {cart.length}</h3>
            <div className="food-list">
                <ol>
                    <li>{mealName}</li>
                </ol>
            </div>
        </div>
    );
};

export default Cart;