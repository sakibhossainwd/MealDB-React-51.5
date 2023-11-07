// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';


const Restaurant = () => {
    const [meals, setMeals] = useState([]);
    console.log(meals)
    const allMeals = meals.meals
    console.log(allMeals)

    useEffect ( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
        .then(res => res.json())
        .then(data => setMeals(data))
    } ,[])

    return (
           <div className="restaurant-container">
            <div className="foods-container">
                {
                   allMeals.map(meal => <Meals
                   key={meal.id}
                   meal={meal}
                   ></Meals>)
                }
            </div>
        </div>
    );
};

export default Restaurant;