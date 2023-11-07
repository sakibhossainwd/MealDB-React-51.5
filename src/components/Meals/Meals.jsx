// eslint-disable-next-line no-unused-vars
import React from 'react';
import  './Meals.css'

const Meals = (props) => {
    // console.log(props.meal)
    const {strMealThumb, strMeal, strCategory, strYoutube} = props.meal;
    const handleAddToCart = props.handleAddToCart


    return (
            <div className="meal">
                <img src={strMealThumb} alt="" />
                <div className="meal-details">
                    <h2>{strMeal}</h2>
                    <h5>Category: {strCategory}</h5>
                </div>
                <div className="add-To-Cart">
                    <button className='youtube'>Youtube</button>
                    <button className='addToCart' onClick={() => handleAddToCart(props.meal)}>Add To Cart</button>
                </div>
            </div>
    );
};

export default Meals;