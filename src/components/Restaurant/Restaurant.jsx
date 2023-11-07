// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import './Restaurant.css'
import Cart from '../Cart/Cart';


const Restaurant = () => {
    const [meals, setMeals] = useState([]);
    const allMeals = meals.meals

    const [cart, setCart] = useState([]);


    useEffect ( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
        .then(res => res.json())
        .then(data => setMeals(data))
    } ,[]);

    const handleAddToCart = (food) => {
        const newCart = [...cart, food];
        setCart(newCart)
    }

    return (
           <div className="restaurant-container">
            <div className="foods-container">
                {
                   allMeals?.map(meal => <Meals
                   key={meal.id}
                   meal={meal}
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