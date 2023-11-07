// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';


const Restaurant = () => {
    const [meals, setMeals] = useState([]);
    const Meals = meals.meals
    console.log(Meals)

    useEffect ( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
        .then(res => res.json())
        .then(data => setMeals(data))
    } ,[])

    return (
           <div className="restaurant-container">
            <div className="foods-container">

                
            </div>
        </div>
    );
};

export default Restaurant;