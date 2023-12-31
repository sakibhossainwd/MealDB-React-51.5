// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import './Restaurant.css'
import Cart from '../Cart/Cart';


const Restaurant = ({meals, setMeals, letter}) => {

    const [cart, setCart] = useState([]);

    useEffect ( () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    } ,[letter]);

    const handleAddToCart = (meal) => {
        const newCart = [...cart, meal];
        setCart(newCart)
    }

    return (
           <div className="restaurant-container">
            <div className="foods-container">
                {
                   meals?.map((meal, index) => <Meals
                   key={index}
                   meal={meal}
                   handleAddToCart={handleAddToCart}
                   ></Meals>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Restaurant;